"use client";

import { StatCard } from "@/components/ui/stat-card";
import { Card, CardHeader } from "@/components/ui/card";
import { DataTable } from "@/components/ui/data-table";
import { ProgressBar, RatingBar } from "@/components/ui/progress-bar";
import { Button } from "@/components/ui/button";
import { ActionModalHost } from "@/components/ui/action-modal-host";
import { useActionModal } from "@/hooks/use-action-modal";
import { GuestsChart, RevenueChart } from "@/components/charts/line-charts";
import { BookingsChart, PlatformChart } from "@/components/charts/bar-pie-charts";
import {
  kpiStats,
  guestChartData,
  revenueChartData,
  bookingsChartData,
  platformData,
  recentBookings,
  roomOccupancy,
  ratings,
  recentActivity,
} from "@/lib/data/dashboard";

const bookingColumns = [
  { key: "id", label: "Booking ID" },
  { key: "guest", label: "Guest Name" },
  { key: "roomType", label: "Room Type" },
  { key: "roomNo", label: "Room No" },
  { key: "duration", label: "Duration" },
  { key: "checkIn", label: "Check In" },
  { key: "checkOut", label: "Check Out" },
  { key: "status", label: "Status", type: "status" },
];

const occupancyItems = [
  { label: "Occupied", value: roomOccupancy.occupied, color: "bg-blue-500" },
  { label: "Available", value: roomOccupancy.available, color: "bg-green-500" },
  { label: "Reserved", value: roomOccupancy.reserved, color: "bg-purple-500" },
  { label: "Not Ready", value: roomOccupancy.notReady, color: "bg-orange-500" },
];

const activityColors = {
  booking: "bg-blue-500",
  payment: "bg-green-500",
  checkin: "bg-purple-500",
  registration: "bg-amber-500",
  housekeeping: "bg-emerald-500",
};

export function DashboardContent() {
  const occupancyPct = Math.round((roomOccupancy.occupied / roomOccupancy.total) * 100);
  const { modal, handleAction, closeModal, handleFormSubmit, handleConfirm } = useActionModal({
    columns: bookingColumns,
    pageTitle: "Booking",
    formFields: ["Booking ID", "Guest Name", "Room Type", "Room No", "Check In", "Check Out", "Status"],
  });

  return (
    <div className="w-full min-w-0 max-w-full">
      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_minmax(0,300px)] gap-6">
        <div className="min-w-0 space-y-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {kpiStats.map((stat) => (
              <StatCard key={stat.label} {...stat} />
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="min-w-0 overflow-hidden">
              <CardHeader title="Guests" subtitle="Weekly guest count" />
              <GuestsChart data={guestChartData} />
            </Card>
            <Card className="min-w-0 overflow-hidden">
              <CardHeader title="Revenue" subtitle="Last 8 months" />
              <RevenueChart data={revenueChartData} />
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Card className="min-w-0 overflow-hidden">
              <CardHeader title="Bookings" subtitle="Booked vs Canceled" />
              <BookingsChart data={bookingsChartData} />
            </Card>
            <Card className="min-w-0 overflow-hidden">
              <CardHeader title="Bookings by Platform" subtitle="Source distribution" />
              <PlatformChart data={platformData} />
            </Card>
          </div>

          <Card className="min-w-0 overflow-hidden">
            <CardHeader
              title="Booking List"
              subtitle="Recent and upcoming bookings"
              action={
                <Button size="sm" onClick={() => handleAction("New Booking")}>
                  New Booking
                </Button>
              }
            />
            <DataTable
              columns={bookingColumns}
              data={recentBookings}
              selectable
              onRowSelect={(row) => handleAction("Edit", row)}
            />
          </Card>
        </div>

        <div className="min-w-0 space-y-4">
          <Card className="min-w-0">
            <CardHeader title="Room Occupancy" />
            <div className="text-center mb-4">
              <p className="text-3xl font-bold text-foreground">{occupancyPct}%</p>
              <p className="text-xs text-muted">{roomOccupancy.occupied} of {roomOccupancy.total} rooms</p>
            </div>
            <ProgressBar value={roomOccupancy.occupied} max={roomOccupancy.total} className="mb-4" />
            <div className="space-y-2">
              {occupancyItems.map((item) => (
                <div key={item.label} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2">
                    <span className={`h-2.5 w-2.5 rounded-full ${item.color}`} />
                    <span className="text-muted">{item.label}</span>
                  </div>
                  <span className="font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </Card>

          <Card className="min-w-0">
            <CardHeader title="Overall Ratings" />
            <div className="text-center mb-4">
              <p className="text-4xl font-bold text-foreground">{ratings.overall}</p>
              <p className="text-xs text-muted">out of 10</p>
            </div>
            <div className="space-y-3">
              {ratings.categories.map((cat) => (
                <RatingBar key={cat.name} label={cat.name} score={cat.score} />
              ))}
            </div>
          </Card>

          <Card className="min-w-0">
            <CardHeader title="Recent Activity" />
            <div className="space-y-4">
              {recentActivity.map((activity, i) => (
                <div key={i} className="flex gap-3">
                  <div className="flex flex-col items-center">
                    <span className={`h-2.5 w-2.5 rounded-full mt-1.5 ${activityColors[activity.type]}`} />
                    {i < recentActivity.length - 1 && <div className="w-px flex-1 bg-border mt-1" />}
                  </div>
                  <div className="pb-3 min-w-0">
                    <p className="text-sm text-foreground leading-snug">{activity.text}</p>
                    <p className="text-xs text-muted mt-0.5">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <ActionModalHost
        modal={modal}
        onClose={closeModal}
        onFormSubmit={handleFormSubmit}
        onConfirm={handleConfirm}
      />
    </div>
  );
}

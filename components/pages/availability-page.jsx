"use client";

import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Select } from "@/components/ui/input";

const slotColors = {
  occupied: "bg-blue-500",
  free: "bg-green-100 border border-green-200",
  blocked: "bg-orange-400",
};

export function AvailabilityPage({ title, description, calendar }) {
  const { dates = [], rooms = [] } = calendar || {};

  return (
    <div className="min-w-0">
      <PageHeader title={title} description={description} />
      <Card className="mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Select label="Room Type" options={["All", "Standard", "Deluxe", "Suite"]} />
          <Select label="Floor" options={["All", "Floor 1", "Floor 2", "Floor 3", "Floor 5"]} />
          <Select label="Status" options={["All", "Vacant", "Occupied", "Reserved"]} />
        </div>
      </Card>
      <Card className="overflow-x-auto">
        <table className="w-full text-sm min-w-[500px]">
          <thead>
            <tr className="border-b border-border">
              <th className="px-4 py-3 text-left text-xs font-semibold text-muted uppercase sticky left-0 bg-white">Room</th>
              {dates.map((d) => (
                <th key={d} className="px-3 py-3 text-center text-xs font-semibold text-muted uppercase min-w-[80px]">{d}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {rooms.map((row) => (
              <tr key={row.room}>
                <td className="px-4 py-3 font-semibold sticky left-0 bg-white">{row.room}</td>
                {row.slots.map((slot, i) => (
                  <td key={i} className="px-3 py-3">
                    <div className={`h-8 rounded-md ${slotColors[slot] || slotColors.free}`} title={slot} />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex flex-wrap gap-4 mt-4 pt-4 border-t border-border text-xs text-muted">
          <span className="flex items-center gap-2"><span className="h-3 w-8 rounded bg-blue-500" /> Occupied</span>
          <span className="flex items-center gap-2"><span className="h-3 w-8 rounded bg-green-100 border border-green-200" /> Available</span>
          <span className="flex items-center gap-2"><span className="h-3 w-8 rounded bg-orange-400" /> Blocked</span>
        </div>
      </Card>
    </div>
  );
}

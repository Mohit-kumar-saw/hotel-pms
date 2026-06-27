"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Input, Select } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { StatusBadge } from "@/components/ui/status-badge";
import { ActionModalHost } from "@/components/ui/action-modal-host";
import { useActionModal } from "@/hooks/use-action-modal";
import { Search, Upload, UserCheck, BedDouble, KeyRound, Car } from "lucide-react";

function FormSection({ title, icon: Icon, children }) {
  return (
    <Card className="min-w-0">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-border">
        {Icon && (
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
            <Icon className="h-4 w-4" />
          </span>
        )}
        <h3 className="text-sm font-semibold text-foreground">{title}</h3>
      </div>
      {children}
    </Card>
  );
}

function splitName(fullName) {
  const parts = (fullName || "").trim().split(" ");
  return { first: parts[0] || "", last: parts.slice(1).join(" ") || "" };
}

export function CheckInPage({ title, description, pendingCheckIns = [], sections }) {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [idFile, setIdFile] = useState(null);

  const filtered = pendingCheckIns.filter(
    (b) =>
      b.id.toLowerCase().includes(search.toLowerCase()) ||
      b.guestName.toLowerCase().includes(search.toLowerCase()) ||
      b.mobile.includes(search)
  );

  const loadBooking = (booking) => {
    setSelected(booking);
    setSearch(booking.id);
  };

  const guest = selected ? splitName(selected.guestName) : { first: "", last: "" };

  const allFields = sections
    ? [...sections.guestVerification, ...sections.roomAllocation, ...sections.depositAndKey, ...sections.additional]
    : [];

  const { modal, handleAction, closeModal, handleFormSubmit, handleConfirm, showSuccess } = useActionModal({
    formFields: allFields,
    pageTitle: title,
  });

  const completeCheckIn = (e) => {
    e.preventDefault();
    if (!selected) {
      handleAction("Select Booking");
      return;
    }
    showSuccess("Check-in Complete");
  };

  return (
    <div className="min-w-0">
      <PageHeader
        title={title}
        description={description}
        actions={["Complete Check-in"]}
        onAction={() => {
          if (!selected) {
            handleAction("Select Booking");
            return;
          }
          showSuccess("Check-in Complete");
        }}
      />

      <div className="grid grid-cols-1 xl:grid-cols-[minmax(0,1fr)_320px] gap-4 md:gap-6">
        <div className="min-w-0 space-y-4">
          {/* Booking lookup */}
          <Card>
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
                <input
                  type="text"
                  placeholder="Search by Booking ID, guest name, or mobile..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="w-full rounded-lg border border-border bg-white pl-10 pr-4 py-2.5 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
              <Button type="button" variant="secondary" onClick={() => handleAction("New Walk-in")}>
                Walk-in Check-in
              </Button>
            </div>
            {filtered.length > 0 && !selected && (
              <div className="mt-3 border border-border rounded-lg divide-y divide-border max-h-48 overflow-y-auto">
                {filtered.map((b) => (
                  <button
                    key={b.id}
                    type="button"
                    onClick={() => loadBooking(b)}
                    className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors flex items-center justify-between gap-3"
                  >
                    <div className="min-w-0">
                      <p className="font-medium text-sm">{b.guestName}</p>
                      <p className="text-xs text-muted">{b.id} · {b.mobile}</p>
                    </div>
                    <div className="text-right shrink-0">
                      <p className="text-sm font-medium">Room {b.roomNo || "—"}</p>
                      <p className="text-xs text-muted">{b.roomType}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}
            {selected && (
              <div className="mt-3 flex items-center justify-between gap-3 p-3 rounded-lg bg-primary/5 border border-primary/20">
                <div>
                  <p className="text-sm font-semibold text-foreground">{selected.id} — {selected.guestName}</p>
                  <p className="text-xs text-muted">Room {selected.roomNo || "Not assigned"} · {selected.nights} night(s)</p>
                </div>
                <Button type="button" variant="ghost" size="sm" onClick={() => { setSelected(null); setSearch(""); }}>
                  Change
                </Button>
              </div>
            )}
          </Card>

          <form key={selected?.id ?? "empty"} onSubmit={completeCheckIn} className="space-y-4">
            <FormSection title="Guest Verification" icon={UserCheck}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Input label="First Name" defaultValue={guest.first} placeholder="First name" />
                <Input label="Last Name" defaultValue={guest.last} placeholder="Last name" />
                <Input label="Mobile" defaultValue={selected?.mobile ?? ""} placeholder="+91..." />
                <Input label="Email" type="email" defaultValue={selected?.email ?? ""} placeholder="email@example.com" />
                <Select
                  label="Nationality"
                  defaultValue={selected?.nationality ?? ""}
                  options={["Indian", "American", "British", "Other"]}
                />
                <Select
                  label="ID Proof Type"
                  defaultValue={selected?.idType ?? ""}
                  options={["Aadhaar", "Passport", "Driving License", "Voter ID"]}
                />
                <Input label="ID Number" defaultValue={selected?.idNo ?? ""} placeholder="ID number" className="sm:col-span-2" />
                <div className="sm:col-span-2 lg:col-span-3">
                  <label className="text-sm font-medium text-foreground block mb-1.5">ID Upload</label>
                  <label className="flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-gray-50/50 px-4 py-6 cursor-pointer hover:border-primary hover:bg-primary/5 transition-colors">
                    <Upload className="h-8 w-8 text-muted" />
                    <span className="text-sm text-muted">
                      {idFile ? idFile.name : "Click to upload ID proof (PDF, JPG, PNG)"}
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.jpg,.jpeg,.png"
                      className="hidden"
                      onChange={(e) => setIdFile(e.target.files?.[0] ?? null)}
                    />
                  </label>
                </div>
              </div>
            </FormSection>

            <FormSection title="Room Allocation" icon={BedDouble}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Select
                  label="Room Type"
                  defaultValue={selected?.roomType ?? ""}
                  options={["Standard", "Deluxe", "Suite", "Executive"]}
                />
                <Select
                  label="Room Number"
                  defaultValue={selected?.roomNo ?? ""}
                  options={["", "101", "102", "105", "112", "201", "204", "301", "501"]}
                />
                <Input label="Floor" type="number" defaultValue={selected?.floor ?? ""} placeholder="Floor" />
                <Select
                  label="Bed Type"
                  defaultValue={selected?.bedType ?? ""}
                  options={["King", "Queen", "Twin"]}
                />
                <Input label="Adults" type="number" defaultValue={selected?.adults ?? 1} min={1} />
                <Input label="Children" type="number" defaultValue={selected?.children ?? 0} min={0} />
                <Input label="Check-in Date" type="date" defaultValue={selected?.checkIn ?? ""} />
                <Input label="Check-out Date" type="date" defaultValue={selected?.checkOut ?? ""} />
                <Input label="Nights" type="number" defaultValue={selected?.nights ?? ""} readOnly className="bg-gray-50" />
              </div>
            </FormSection>

            <FormSection title="Deposit & Key Card" icon={KeyRound}>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <Input label="Deposit Amount" type="number" placeholder="₹0" defaultValue="" />
                <Select label="Payment Mode" options={["Cash", "UPI", "Card", "Bank Transfer"]} />
                <Input label="Key Card Number" placeholder="e.g. KC-2041" />
                <Input
                  label="Advance Balance"
                  type="number"
                  defaultValue={selected?.advancePaid ?? 0}
                  readOnly
                  className="bg-gray-50"
                />
              </div>
            </FormSection>

            <FormSection title="Additional Information" icon={Car}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Input label="Vehicle Number" placeholder="e.g. MH-12-AB-1234" />
                <Input label="Special Requests" placeholder="Any special requests" />
                <Input label="Remarks" placeholder="Internal remarks" className="sm:col-span-2" />
              </div>
            </FormSection>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button type="submit" disabled={!selected}>
                Complete Check-in
              </Button>
              <Button type="button" variant="secondary" onClick={() => handleAction("Print Registration Card")}>
                Print Registration
              </Button>
              <Button type="button" variant="ghost" onClick={() => { setSelected(null); setSearch(""); setIdFile(null); }}>
                Reset
              </Button>
            </div>
          </form>
        </div>

        {/* Summary sidebar */}
        <div className="space-y-4 min-w-0">
          <Card className="sticky top-24">
            <h3 className="text-sm font-semibold text-foreground mb-4">Booking Summary</h3>
            {selected ? (
              <div className="space-y-3 text-sm">
                <div className="flex justify-between gap-2">
                  <span className="text-muted">Booking ID</span>
                  <span className="font-medium">{selected.id}</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-muted">Guest</span>
                  <span className="font-medium text-right">{selected.guestName}</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-muted">Source</span>
                  <span>{selected.source}</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-muted">Room</span>
                  <span className="font-medium">{selected.roomNo || "Assign room"} · {selected.roomType}</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-muted">Stay</span>
                  <span>{selected.nights} night(s)</span>
                </div>
                <hr className="border-border" />
                <div className="flex justify-between gap-2">
                  <span className="text-muted">Advance Paid</span>
                  <span className="text-green-600 font-medium">₹{Number(selected.advancePaid).toLocaleString("en-IN")}</span>
                </div>
                <div className="flex justify-between gap-2">
                  <span className="text-muted">Balance Due</span>
                  <span className="font-semibold text-primary">₹{Number(selected.balance).toLocaleString("en-IN")}</span>
                </div>
                <div className="pt-2">
                  <StatusBadge status="Confirmed" />
                </div>
              </div>
            ) : (
              <p className="text-sm text-muted text-center py-6">Select a booking from the search above to begin check-in.</p>
            )}
          </Card>

          <Card>
            <h3 className="text-sm font-semibold text-foreground mb-3">Today&apos;s Arrivals</h3>
            <div className="space-y-2">
              {pendingCheckIns.slice(0, 4).map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => loadBooking(b)}
                  className={`w-full text-left p-3 rounded-lg border transition-colors ${
                    selected?.id === b.id ? "border-primary bg-primary/5" : "border-border hover:bg-gray-50"
                  }`}
                >
                  <p className="text-sm font-medium truncate">{b.guestName}</p>
                  <p className="text-xs text-muted">{b.id} · Room {b.roomNo || "TBD"}</p>
                </button>
              ))}
            </div>
          </Card>
        </div>
      </div>

      <ActionModalHost modal={modal} onClose={closeModal} onFormSubmit={handleFormSubmit} onConfirm={handleConfirm} />
    </div>
  );
}

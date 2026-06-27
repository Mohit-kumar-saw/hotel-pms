"use client";

import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Input, Select } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ActionModalHost } from "@/components/ui/action-modal-host";
import { useActionModal } from "@/hooks/use-action-modal";
import { reservationFormSections } from "@/lib/data/front-office";

function FormSection({ title, fields, onFieldClick }) {
  return (
    <Card className="min-w-0">
      <h3 className="text-sm font-semibold text-foreground mb-4 pb-2 border-b border-border">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {fields.map((field) => {
          const isSelect = ["Gender", "Nationality", "Country", "State", "ID Proof Type", "Room Type", "Room Number", "Rate Plan", "Meal Plan", "Source", "Payment Mode", "Booking Status"].includes(field);
          if (isSelect) {
            return (
              <Select
                key={field}
                label={field}
                options={[{ label: `Select ${field}`, value: "" }, { label: "Option 1", value: "1" }, { label: "Option 2", value: "2" }]}
              />
            );
          }
          if (field.includes("Date") || field === "DOB") {
            return <Input key={field} label={field} type="date" />;
          }
          if (["Nights", "Adults", "Children", "Advance Paid", "Pending Amount"].includes(field)) {
            return <Input key={field} label={field} type="number" placeholder="0" />;
          }
          return <Input key={field} label={field} placeholder={`Enter ${field.toLowerCase()}`} />;
        })}
      </div>
    </Card>
  );
}

export function ReservationFormPage({ title, description, sections = reservationFormSections }) {
  const allFields = [...sections.guestDetails, ...sections.bookingDetails, ...sections.payment, ...sections.status];
  const { modal, handleAction, closeModal, handleFormSubmit, handleConfirm, showSuccess } = useActionModal({
    formFields: allFields,
    pageTitle: title,
  });

  return (
    <div>
      <PageHeader title={title} description={description} actions={["Save Reservation", "Confirm Booking"]} onAction={handleAction} />
      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          showSuccess("Reservation Saved");
        }}
      >
        <FormSection title="Guest Details" fields={sections.guestDetails} />
        <FormSection title="Booking Details" fields={sections.bookingDetails} />
        <FormSection title="Payment" fields={sections.payment} />
        <FormSection title="Booking Status" fields={sections.status} />
        <div className="flex flex-wrap gap-3">
          <Button type="submit">Save Reservation</Button>
          <Button type="button" variant="secondary" onClick={() => handleAction("Cancel")}>Cancel</Button>
        </div>
      </form>
      <ActionModalHost modal={modal} onClose={closeModal} onFormSubmit={handleFormSubmit} onConfirm={handleConfirm} />
    </div>
  );
}

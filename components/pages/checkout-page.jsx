"use client";

import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Input, Select } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ActionModalHost } from "@/components/ui/action-modal-host";
import { useActionModal } from "@/hooks/use-action-modal";

function SummaryRow({ label, amount, highlight }) {
  return (
    <div className={`flex justify-between text-sm py-2 border-b border-border last:border-0 ${highlight ? "font-semibold text-base" : ""}`}>
      <span className={highlight ? "text-foreground" : "text-muted"}>{label}</span>
      <span className={highlight ? "text-primary" : "text-foreground"}>₹{Number(amount).toLocaleString("en-IN")}</span>
    </div>
  );
}

export function CheckoutPage({ title, description, summary, formFields = ["Payment Method", "Reference No", "Remarks"] }) {
  const s = summary || {};
  const { modal, handleAction, closeModal, handleFormSubmit, handleConfirm, showSuccess } = useActionModal({
    formFields,
    pageTitle: title,
  });

  return (
    <div>
      <PageHeader title={title} description={description} actions={["Generate Invoice", "Print Invoice"]} onAction={handleAction} />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <h3 className="text-sm font-semibold mb-4">Checkout Summary — {s.guest} (Room {s.room})</h3>
          <SummaryRow label="Room Charges" amount={s.roomCharges} />
          <SummaryRow label="Restaurant Charges" amount={s.restaurant} />
          <SummaryRow label="Laundry" amount={s.laundry} />
          <SummaryRow label="Mini Bar" amount={s.miniBar} />
          <SummaryRow label="Extra Bed" amount={s.extraBed} />
          <SummaryRow label="Tax (GST)" amount={s.tax} />
          <SummaryRow label="Discount" amount={-s.discount} />
          <SummaryRow label="Advance Paid" amount={-s.advancePaid} />
          <div className="mt-4 pt-4 border-t-2 border-border">
            <SummaryRow label="Pending Amount" amount={s.pending} highlight />
          </div>
        </Card>
        <Card>
          <h3 className="text-sm font-semibold mb-4">Settlement</h3>
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              showSuccess("Checkout Complete");
            }}
          >
            <Select label="Payment Method" options={["Cash", "UPI", "Card", "Bank", "Split Payment"]} />
            <Input label="Amount" type="number" defaultValue={s.pending} />
            <Input label="Reference No" placeholder="Transaction reference" />
            <div className="flex flex-col gap-2 pt-2">
              <Button type="submit">Complete Checkout</Button>
              <Button type="button" variant="secondary" onClick={() => handleAction("Generate Invoice")}>Generate Invoice</Button>
            </div>
          </form>
        </Card>
      </div>
      <ActionModalHost modal={modal} onClose={closeModal} onFormSubmit={handleFormSubmit} onConfirm={handleConfirm} />
    </div>
  );
}

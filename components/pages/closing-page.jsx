"use client";

import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ActionModalHost } from "@/components/ui/action-modal-host";
import { useActionModal } from "@/hooks/use-action-modal";

export function ClosingPage({ title, description, formFields = [] }) {
  const { modal, handleAction, closeModal, handleFormSubmit, handleConfirm, showSuccess } = useActionModal({
    formFields,
    pageTitle: title,
  });

  return (
    <div>
      <PageHeader
        title={title}
        description={description}
        actions={["Print Summary"]}
        onAction={handleAction}
      />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              showSuccess("Close & Submit");
            }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {formFields.map((field) => (
                <Input key={field} label={field} placeholder={`Enter ${field.toLowerCase()}`} />
              ))}
            </div>
            <div className="flex gap-3 pt-2">
              <Button type="submit">Close & Submit</Button>
              <Button type="button" variant="secondary" onClick={() => handleAction("Cancel")}>
                Cancel
              </Button>
            </div>
          </form>
        </Card>
        <Card>
          <h3 className="text-sm font-semibold text-foreground mb-4">Summary</h3>
          <div className="space-y-3 text-sm">
            <div className="flex justify-between"><span className="text-muted">Opening Balance</span><span className="font-medium">₹25,000</span></div>
            <div className="flex justify-between"><span className="text-muted">Total Collection</span><span className="font-medium text-green-600">₹1,45,800</span></div>
            <div className="flex justify-between"><span className="text-muted">Total Expenses</span><span className="font-medium text-red-500">₹12,400</span></div>
            <hr className="border-border" />
            <div className="flex justify-between font-semibold"><span>Closing Balance</span><span>₹1,58,400</span></div>
          </div>
        </Card>
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

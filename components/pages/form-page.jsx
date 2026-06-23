"use client";

import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Input, Select } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ActionModalHost } from "@/components/ui/action-modal-host";
import { useActionModal } from "@/hooks/use-action-modal";

export function FormPage({ title, description, formFields = [] }) {
  const { modal, handleAction, closeModal, handleFormSubmit, handleConfirm, showSuccess } = useActionModal({
    formFields,
    pageTitle: title,
  });

  return (
    <div>
      <PageHeader
        title={title}
        description={description}
        actions={["New"]}
        onAction={handleAction}
      />
      <Card className="max-w-2xl">
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            showSuccess("Save");
          }}
        >
          {formFields.map((field) => {
            if (["Payment Mode", "Split Type", "ID Type", "Guest Type", "Shift"].includes(field)) {
              return (
                <Select
                  key={field}
                  label={field}
                  options={[{ label: `Select ${field}`, value: "" }, { label: "Option 1", value: "1" }, { label: "Option 2", value: "2" }]}
                />
              );
            }
            return <Input key={field} label={field} placeholder={`Enter ${field.toLowerCase()}`} />;
          })}
          <div className="flex gap-3 pt-2">
            <Button type="submit">Save</Button>
            <Button type="button" variant="secondary" onClick={() => handleAction("Cancel")}>Cancel</Button>
          </div>
        </form>
      </Card>
      <ActionModalHost
        modal={modal}
        onClose={closeModal}
        onFormSubmit={handleFormSubmit}
        onConfirm={handleConfirm}
      />
    </div>
  );
}

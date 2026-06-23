"use client";

import { Card } from "@/components/ui/card";
import { Construction } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ActionModalHost } from "@/components/ui/action-modal-host";
import { useActionModal } from "@/hooks/use-action-modal";

export function PlaceholderPage({ title, description, module }) {
  const { modal, handleAction, closeModal, handleFormSubmit, handleConfirm } = useActionModal({
    formFields: ["Name", "Category", "Description", "Status"],
    pageTitle: title,
  });

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Card className="max-w-lg text-center">
        <div className="flex justify-center mb-4">
          <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
            <Construction className="h-8 w-8 text-primary" />
          </div>
        </div>
        <h2 className="text-xl font-bold text-foreground">{title}</h2>
        {module && <p className="text-sm text-primary font-medium mt-1">{module} Module</p>}
        <p className="text-sm text-muted mt-3 leading-relaxed">{description}</p>
        <p className="text-xs text-muted mt-4">This module will be integrated with dropdowns from the current software.</p>
        <div className="flex gap-3 justify-center mt-6">
          <Button onClick={() => handleAction("Add New")}>Add New</Button>
          <Button variant="secondary" onClick={() => handleAction("Configure")}>Configure</Button>
        </div>
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

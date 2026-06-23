"use client";

import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { DataTable } from "@/components/ui/data-table";
import { Button } from "@/components/ui/button";
import { ActionModalHost } from "@/components/ui/action-modal-host";
import { useActionModal } from "@/hooks/use-action-modal";
import { Pencil } from "lucide-react";

export function MasterListPage({ title, description, columns, data = [], formFields }) {
  const {
    modal,
    selectedRow,
    setSelectedRow,
    handleAction,
    closeModal,
    handleFormSubmit,
    handleConfirm,
  } = useActionModal({ formFields, columns, pageTitle: title });

  return (
    <div>
      <PageHeader title={title} description={description} actions={["New", "Edit"]} onAction={handleAction} />
      <Card>
        <DataTable
          columns={columns}
          data={data}
          selectable
          selectedRow={selectedRow}
          onRowSelect={setSelectedRow}
        />
        <div className="mt-4 flex gap-2">
          <Button variant="ghost" size="sm" onClick={() => handleAction("Edit")}>
            <Pencil className="h-3.5 w-3.5" /> Edit Selected
          </Button>
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

"use client";

import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { DataTable } from "@/components/ui/data-table";
import { ActionModalHost } from "@/components/ui/action-modal-host";
import { useActionModal } from "@/hooks/use-action-modal";

export function DataTablePage({ title, description, columns, data = [], actions = [], formFields }) {
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
      <PageHeader title={title} description={description} actions={actions} onAction={handleAction} />
      <Card>
        <DataTable
          columns={columns}
          data={data}
          selectable={actions.length > 0}
          selectedRow={selectedRow}
          onRowSelect={setSelectedRow}
        />
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

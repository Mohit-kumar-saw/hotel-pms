"use client";

import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { DataTable } from "@/components/ui/data-table";
import { ActionModalHost } from "@/components/ui/action-modal-host";
import { useActionModal } from "@/hooks/use-action-modal";

export function FolioPage({ title, description, columns, data = [], guestName, roomNo }) {
  const { modal, handleAction, closeModal, handleFormSubmit, handleConfirm } = useActionModal({
    columns,
    pageTitle: title,
    formFields: ["Date", "Description", "Debit", "Credit"],
  });

  const lastBalance = data.length ? data[data.length - 1].balance : 0;

  return (
    <div>
      <PageHeader title={title} description={description} actions={["Add Entry", "Print Folio"]} onAction={handleAction} />
      {(guestName || roomNo) && (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
          {guestName && <Card className="!p-3"><p className="text-xs text-muted">Guest</p><p className="font-semibold">{guestName}</p></Card>}
          {roomNo && <Card className="!p-3"><p className="text-xs text-muted">Room</p><p className="font-semibold">{roomNo}</p></Card>}
          <Card className="!p-3"><p className="text-xs text-muted">Running Balance</p><p className="font-semibold text-primary">₹{Number(lastBalance).toLocaleString("en-IN")}</p></Card>
        </div>
      )}
      <Card>
        <DataTable columns={columns} data={data} searchable={false} />
      </Card>
      <ActionModalHost modal={modal} onClose={closeModal} onFormSubmit={handleFormSubmit} onConfirm={handleConfirm} />
    </div>
  );
}

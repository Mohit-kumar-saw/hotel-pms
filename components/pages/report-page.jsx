"use client";

import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { DataTable } from "@/components/ui/data-table";
import { Input, Select } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ActionModalHost } from "@/components/ui/action-modal-host";
import { useActionModal } from "@/hooks/use-action-modal";

export function ReportPage({ title, description, columns, data = [] }) {
  const { modal, handleAction, closeModal, handleFormSubmit, handleConfirm } = useActionModal({
    columns,
    pageTitle: title,
    formFields: ["From Date", "To Date", "Filter By", "Format"],
  });

  return (
    <div>
      <PageHeader
        title={title}
        description={description}
        actions={["Export PDF", "Export Excel"]}
        onAction={handleAction}
      />
      <Card className="mb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <Input label="From Date" type="date" defaultValue="2026-06-01" />
          <Input label="To Date" type="date" defaultValue="2026-06-23" />
          <Select label="Filter By" options={["All", "Date wise", "Item wise", "Table wise"]} />
          <div className="flex items-end">
            <Button className="w-full" onClick={() => handleAction("Generate Report")}>
              Generate Report
            </Button>
          </div>
        </div>
      </Card>
      <Card>
        <DataTable columns={columns} data={data} />
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

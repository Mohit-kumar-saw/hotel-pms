"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { DataTable } from "@/components/ui/data-table";
import { StatusBadge } from "@/components/ui/status-badge";
import { Button } from "@/components/ui/button";
import { ActionModalHost } from "@/components/ui/action-modal-host";
import { useActionModal } from "@/hooks/use-action-modal";
import { guestStayHistory, guestInvoices } from "@/lib/data/front-office";

const tabs = ["Personal", "Stay History", "Invoices", "Restaurant Bills", "Laundry Bills", "Feedback", "Documents", "Loyalty Points"];

export function GuestProfilePage({ title, description, guests = [] }) {
  const [selected, setSelected] = useState(guests[0] || null);
  const [activeTab, setActiveTab] = useState("Personal");
  const { modal, handleAction, closeModal, handleFormSubmit, handleConfirm } = useActionModal({
    pageTitle: title,
    formFields: ["First Name", "Last Name", "Mobile", "Email", "Address"],
  });

  const invoiceColumns = [
    { key: "id", label: "Invoice No" },
    { key: "date", label: "Date" },
    { key: "amount", label: "Amount", type: "currency" },
    { key: "gst", label: "GST", type: "currency" },
    { key: "status", label: "Status", type: "status" },
  ];

  return (
    <div>
      <PageHeader title={title} description={description} actions={["Edit Profile", "New Reservation"]} onAction={handleAction} />
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-4 min-w-0">
        <Card className="min-w-0 !p-0 overflow-hidden">
          <div className="p-3 border-b border-border bg-gray-50/80">
            <p className="text-xs font-semibold text-muted uppercase">Guest List</p>
          </div>
          <div className="max-h-[480px] overflow-y-auto">
            {guests.map((g) => (
              <button
                key={g.id}
                type="button"
                onClick={() => setSelected(g)}
                className={`w-full text-left px-4 py-3 border-b border-border transition-colors ${
                  selected?.id === g.id ? "bg-primary/5 border-l-4 border-l-primary" : "hover:bg-gray-50"
                }`}
              >
                <p className="font-medium text-sm truncate">{g.name}</p>
                <p className="text-xs text-muted truncate">{g.mobile}</p>
              </button>
            ))}
          </div>
        </Card>

        {selected && (
          <div className="min-w-0 space-y-4">
            <Card>
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h2 className="text-xl font-bold">{selected.name}</h2>
                  <p className="text-sm text-muted">{selected.id} · {selected.nationality}</p>
                </div>
                <StatusBadge status="Active" />
              </div>
              <div className="flex flex-wrap gap-2 mt-4">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                      activeTab === tab ? "bg-primary text-white" : "bg-gray-100 text-muted hover:text-foreground"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </Card>

            {activeTab === "Personal" && (
              <Card>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                  {[
                    ["Mobile", selected.mobile], ["Email", selected.email], ["Gender", selected.gender],
                    ["DOB", selected.dob], ["Address", selected.address], ["City", selected.city],
                    ["State", selected.state], ["Country", selected.country], ["ID Type", selected.idType],
                    ["ID Number", selected.idNo], ["Visits", selected.visits], ["Last Stay", selected.lastStay],
                  ].map(([label, val]) => (
                    <div key={label}>
                      <p className="text-xs text-muted">{label}</p>
                      <p className="font-medium">{val ?? "—"}</p>
                    </div>
                  ))}
                </div>
              </Card>
            )}

            {activeTab === "Stay History" && (
              <Card>
                <DataTable
                  columns={[
                    { key: "date", label: "Date" }, { key: "room", label: "Room" },
                    { key: "nights", label: "Nights" }, { key: "amount", label: "Amount", type: "currency" },
                    { key: "status", label: "Status", type: "status" },
                  ]}
                  data={guestStayHistory}
                />
              </Card>
            )}

            {(activeTab === "Invoices" || activeTab === "Restaurant Bills" || activeTab === "Laundry Bills") && (
              <Card>
                <DataTable columns={invoiceColumns} data={guestInvoices} />
              </Card>
            )}

            {activeTab === "Loyalty Points" && (
              <Card className="text-center py-8">
                <p className="text-4xl font-bold text-primary">{selected.loyaltyPoints ?? 0}</p>
                <p className="text-sm text-muted mt-1">Loyalty Points</p>
              </Card>
            )}

            {["Feedback", "Documents"].includes(activeTab) && (
              <Card className="py-8 text-center text-muted text-sm">No {activeTab.toLowerCase()} records for this guest.</Card>
            )}
          </div>
        )}
      </div>
      <ActionModalHost modal={modal} onClose={closeModal} onFormSubmit={handleFormSubmit} onConfirm={handleConfirm} />
    </div>
  );
}

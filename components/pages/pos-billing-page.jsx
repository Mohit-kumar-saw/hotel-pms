"use client";

import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { Input, Select } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { ActionModalHost } from "@/components/ui/action-modal-host";
import { useActionModal } from "@/hooks/use-action-modal";

const menuItems = [
  { id: 1, name: "Butter Chicken", price: 450, category: "Main" },
  { id: 2, name: "Paneer Tikka", price: 320, category: "Starter" },
  { id: 3, name: "Dal Makhani", price: 280, category: "Main" },
  { id: 4, name: "Mineral Water", price: 60, category: "Beverage" },
  { id: 5, name: "Fresh Lime Soda", price: 120, category: "Beverage" },
];

export function PosBillingPage({ title, description, orders = [] }) {
  const { modal, handleAction, closeModal, handleFormSubmit, handleConfirm, showSuccess } = useActionModal({
    pageTitle: title,
    formFields: ["Table No", "Item", "Quantity", "Discount %"],
  });

  const orderColumns = [
    { key: "table", label: "Table" },
    { key: "guest", label: "Guest" },
    { key: "items", label: "Items" },
    { key: "subtotal", label: "Subtotal", type: "currency" },
    { key: "gst", label: "GST", type: "currency" },
    { key: "total", label: "Total", type: "currency" },
    { key: "status", label: "Status", type: "status" },
  ];

  return (
    <div>
      <PageHeader title={title} description={description} actions={["New Order", "Transfer to Room"]} onAction={handleAction} />
      <div className="grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-4 min-w-0">
        <div className="space-y-4 min-w-0">
          <Card>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
              <Select label="Customer Type" options={["Walk-in Customer", "In-house Guest"]} />
              <Select label="Table" options={["T-01", "T-02", "T-03", "T-04", "Walk-in"]} />
              <Select label="Guest / Room" options={["—", "James Wilson (112)", "P. Nair (301)"]} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleAction(`Add ${item.name}`)}
                  className="text-left p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-colors"
                >
                  <p className="text-sm font-medium truncate">{item.name}</p>
                  <p className="text-xs text-muted">{item.category}</p>
                  <p className="text-sm font-semibold text-primary mt-1">₹{item.price}</p>
                </button>
              ))}
            </div>
          </Card>
          <Card>
            <h3 className="text-sm font-semibold mb-3">Open Orders</h3>
            <DataTable columns={orderColumns} data={orders} />
          </Card>
        </div>
        <Card className="h-fit sticky top-24">
          <h3 className="text-sm font-semibold mb-4">Bill Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span className="text-muted">Subtotal</span><span>₹1,850</span></div>
            <div className="flex justify-between"><span className="text-muted">Discount</span><span>₹0</span></div>
            <div className="flex justify-between"><span className="text-muted">GST (18%)</span><span>₹333</span></div>
            <hr className="border-border" />
            <div className="flex justify-between font-bold text-base"><span>Total</span><span className="text-primary">₹2,183</span></div>
          </div>
          <div className="mt-4 space-y-2">
            <Select label="Payment Mode" options={["Cash", "UPI", "Card", "Room Charge"]} />
            <Button className="w-full" onClick={() => showSuccess("Payment Received")}>Pay Now</Button>
            <Button className="w-full" variant="secondary" onClick={() => handleAction("Transfer to Room")}>Transfer to Room</Button>
          </div>
        </Card>
      </div>
      <ActionModalHost modal={modal} onClose={closeModal} onFormSubmit={handleFormSubmit} onConfirm={handleConfirm} />
    </div>
  );
}

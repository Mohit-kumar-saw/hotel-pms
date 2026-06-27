"use client";

import { Card } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { StatusBadge } from "@/components/ui/status-badge";
import { ActionModalHost } from "@/components/ui/action-modal-host";
import { useActionModal } from "@/hooks/use-action-modal";

const statusColors = {
  Occupied: "border-blue-300 bg-blue-50",
  Vacant: "border-green-300 bg-green-50",
  Available: "border-green-300 bg-green-50",
  Dirty: "border-red-300 bg-red-50",
  Clean: "border-emerald-300 bg-emerald-50",
  Reserved: "border-purple-300 bg-purple-50",
  Maintenance: "border-orange-300 bg-orange-50",
  Blocked: "border-gray-400 bg-gray-100",
};

export function RoomGridPage({ title, description, data = [], actions = ["Change Status", "Block Room"] }) {
  const floors = [...new Set(data.map((r) => r.floor))].sort();
  const {
    modal,
    handleAction,
    closeModal,
    handleFormSubmit,
    handleConfirm,
  } = useActionModal({
    formFields: ["Room No", "Floor", "Category", "Status", "Guest", "Remarks"],
    pageTitle: title,
  });

  return (
    <div>
      <PageHeader
        title={title}
        description={description}
        actions={actions}
        onAction={handleAction}
      />
      <div className="flex flex-wrap gap-3 mb-6">
        {Object.keys(statusColors).map((status) => (
          <div key={status} className="flex items-center gap-2">
            <StatusBadge status={status} />
          </div>
        ))}
      </div>
      {floors.map((floor) => (
        <Card key={floor} className="mb-4">
          <h3 className="text-sm font-semibold text-muted mb-3">Floor {floor}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {data.filter((r) => r.floor === floor).map((room) => (
              <button
                key={room.roomNo}
                type="button"
                onClick={() =>
                  handleAction("Edit", {
                    id: room.roomNo,
                    roomNo: room.roomNo,
                    floor: room.floor,
                    category: room.category,
                    status: room.status,
                    guest: room.guest,
                  })
                }
                className={`rounded-lg border-2 p-3 text-center cursor-pointer hover:shadow-md transition-shadow ${statusColors[room.status] || "border-gray-200 bg-gray-50"}`}
              >
                <p className="text-lg font-bold text-foreground">{room.roomNo}</p>
                <p className="text-xs text-muted mt-0.5">{room.category}</p>
                <div className="mt-2 flex justify-center">
                  <StatusBadge status={room.status} />
                </div>
                {room.guest !== "—" && (
                  <p className="text-xs text-muted mt-1 truncate">{room.guest}</p>
                )}
                {room.hkStatus && room.hkStatus !== "—" && (
                  <p className="text-[10px] text-muted mt-1">HK: {room.hkStatus}</p>
                )}
              </button>
            ))}
          </div>
        </Card>
      ))}
      <ActionModalHost
        modal={modal}
        onClose={closeModal}
        onFormSubmit={handleFormSubmit}
        onConfirm={handleConfirm}
      />
    </div>
  );
}

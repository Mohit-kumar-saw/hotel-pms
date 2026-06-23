"use client";

import { Modal } from "./modal";
import { Button } from "./button";
import { AlertTriangle, CheckCircle, Info } from "lucide-react";

export function ConfirmModal({ open, onClose, title, message, onConfirm, variant = "danger", confirmLabel = "Confirm" }) {
  const icons = {
    danger: <AlertTriangle className="h-6 w-6 text-red-500" />,
    success: <CheckCircle className="h-6 w-6 text-green-500" />,
    info: <Info className="h-6 w-6 text-primary" />,
  };

  return (
    <Modal open={open} onClose={onClose} title={title} size="sm">
      <div className="flex flex-col items-center text-center gap-4 py-2">
        <div className="h-12 w-12 rounded-full bg-gray-100 flex items-center justify-center">
          {icons[variant]}
        </div>
        <p className="text-sm text-muted leading-relaxed">{message}</p>
        <div className="flex gap-3 w-full pt-2">
          {variant === "danger" ? (
            <>
              <Button variant="danger" className="flex-1" onClick={() => { onConfirm?.(); onClose(); }}>
                {confirmLabel}
              </Button>
              <Button variant="secondary" className="flex-1" onClick={onClose}>Cancel</Button>
            </>
          ) : (
            <Button className="w-full" onClick={onClose}>OK</Button>
          )}
        </div>
      </div>
    </Modal>
  );
}

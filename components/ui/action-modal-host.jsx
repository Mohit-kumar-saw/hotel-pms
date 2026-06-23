"use client";

import { FormModal } from "./form-modal";
import { ConfirmModal } from "./confirm-modal";

export function ActionModalHost({ modal, onClose, onFormSubmit, onConfirm }) {
  if (!modal) return null;

  if (modal.type === "form") {
    return (
      <FormModal
        key={`${modal.action}-${JSON.stringify(modal.initialValues)}`}
        open
        onClose={onClose}
        title={modal.title}
        fields={modal.fields}
        initialValues={modal.initialValues}
        onSubmit={onFormSubmit}
        submitLabel={modal.submitLabel}
      />
    );
  }

  if (modal.type === "confirm") {
    return (
      <ConfirmModal
        open
        onClose={onClose}
        title={modal.title}
        message={modal.message}
        variant={modal.variant}
        confirmLabel={modal.confirmLabel}
        onConfirm={onConfirm}
      />
    );
  }

  if (modal.type === "success") {
    return (
      <ConfirmModal
        open
        onClose={onClose}
        title={modal.title}
        message={modal.message}
        variant="success"
      />
    );
  }

  return null;
}

"use client";

import { useState, useCallback } from "react";
import { resolveFormFields, isFormAction, isDestructiveAction, isInfoAction } from "@/lib/form-fields";

function rowToInitialValues(row, columns) {
  if (!row) return {};
  if (columns?.length) {
    return Object.fromEntries(
      columns
        .filter((c) => c.type !== "status")
        .map((c) => [c.label, String(row[c.key] ?? "")])
    );
  }
  const labelMap = {
    roomNo: "Room No",
    floor: "Floor",
    category: "Category",
    status: "Status",
    guest: "Guest",
  };
  return Object.fromEntries(
    Object.entries(row)
      .filter(([key]) => key !== "id")
      .map(([key, val]) => [labelMap[key] ?? key, String(val ?? "")])
  );
}

export function useActionModal({ formFields, columns, pageTitle }) {
  const [modal, setModal] = useState(null);
  const [selectedRow, setSelectedRow] = useState(null);

  const fields = resolveFormFields({ formFields, columns });

  const showSuccess = useCallback((action, message) => {
    setModal({
      type: "success",
      action,
      title: "Success",
      message: message ?? `${action} completed successfully. (Demo data — not persisted)`,
    });
  }, []);

  const handleAction = useCallback((action, rowOverride = null) => {
    const row = rowOverride ?? selectedRow;
    const lower = action.toLowerCase();

    if (isDestructiveAction(action)) {
      setModal({
        type: "confirm",
        action,
        title: action,
        message: row
          ? `Are you sure you want to ${lower} record ${row.id ?? row.roomNo ?? ""}?`
          : `Are you sure you want to ${lower}?`,
        variant: "danger",
        confirmLabel: action,
      });
      return;
    }

    if (isInfoAction(action)) {
      setModal({
        type: "success",
        action,
        title: action,
        message: `${action} has been processed successfully. (Demo — no file generated)`,
      });
      return;
    }

    if (lower === "save" || lower.includes("submit")) {
      showSuccess(action);
      return;
    }

    const isEdit = lower.includes("edit");

    if (isEdit && !row) {
      setModal({
        type: "success",
        action,
        title: "Select a Record",
        message: "Please select a row from the table below to edit.",
      });
      return;
    }

    if (isFormAction(action) || isEdit) {
      setModal({
        type: "form",
        action,
        title: `${action} — ${pageTitle}`,
        fields,
        initialValues: isEdit ? rowToInitialValues(row, columns) : {},
        submitLabel: lower.includes("close") ? "Submit" : "Save",
      });
      return;
    }

    setModal({
      type: "form",
      action,
      title: `${action} — ${pageTitle}`,
      fields,
      initialValues: {},
    });
  }, [fields, columns, pageTitle, selectedRow, showSuccess]);

  const closeModal = useCallback(() => setModal(null), []);

  const handleFormSubmit = useCallback(() => {
    showSuccess(modal?.action ?? "Save");
  }, [modal, showSuccess]);

  const handleConfirm = useCallback(() => {
    showSuccess(modal?.action ?? "Confirm");
  }, [modal, showSuccess]);

  return {
    modal,
    selectedRow,
    setSelectedRow,
    handleAction,
    closeModal,
    handleFormSubmit,
    handleConfirm,
    showSuccess,
  };
}

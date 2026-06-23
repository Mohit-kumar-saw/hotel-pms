"use client";

import { useEffect, useState } from "react";
import { Modal } from "./modal";
import { Input, Select } from "./input";
import { Button } from "./button";
import { getFieldType } from "@/lib/form-fields";

function FormField({ field, value, onChange }) {
  const type = getFieldType(field);

  if (type === "select") {
    return (
      <Select
        label={field}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        options={[
          { label: `Select ${field}`, value: "" },
          { label: "Option 1", value: "option-1" },
          { label: "Option 2", value: "option-2" },
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ]}
      />
    );
  }

  return (
    <Input
      label={field}
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={`Enter ${field.toLowerCase()}`}
    />
  );
}

export function FormModal({ open, onClose, title, fields = [], initialValues = {}, onSubmit, submitLabel = "Save" }) {
  const [values, setValues] = useState({});

  useEffect(() => {
    if (!open) return;
    const defaults = {};
    fields.forEach((field) => {
      defaults[field] = initialValues[field] ?? "";
    });
    setValues(defaults);
  }, [open, fields, initialValues]);

  const handleClose = () => {
    setValues({});
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(values);
    setValues({});
    onClose();
  };

  const setField = (field, val) => setValues((prev) => ({ ...prev, [field]: val }));

  return (
    <Modal open={open} onClose={handleClose} title={title} size="lg">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {fields.map((field) => (
            <FormField
              key={field}
              field={field}
              value={values[field] ?? ""}
              onChange={(val) => setField(field, val)}
            />
          ))}
        </div>
        {fields.length === 0 && (
          <p className="text-sm text-muted py-4 text-center">No form fields configured for this action.</p>
        )}
        <div className="flex gap-3 pt-2 border-t border-border">
          <Button type="submit">{submitLabel}</Button>
          <Button type="button" variant="secondary" onClick={handleClose}>Cancel</Button>
        </div>
      </form>
    </Modal>
  );
}

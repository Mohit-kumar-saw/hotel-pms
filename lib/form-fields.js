const SELECT_FIELDS = new Set([
  "Payment Mode",
  "Split Type",
  "ID Type",
  "Guest Type",
  "Shift",
  "Credit Allowed",
  "Settlement Type",
  "Filter By",
  "Status",
  "Room No",
  "Booking ID",
]);

const DATE_FIELDS = ["From Date", "To Date", "Check-In", "Check-Out", "Checkout Date", "Date", "Valid From", "Valid To", "Business Date", "Event Date", "Delivery Date", "Sent Date", "Received Date"];

export function resolveFormFields({ formFields, columns }) {
  if (formFields?.length) return formFields;
  if (columns?.length) {
    return columns
      .filter((col) => col.type !== "status" && col.key !== "id")
      .map((col) => col.label);
  }
  return ["Name", "Description", "Remarks"];
}

export function getFieldType(field) {
  if (SELECT_FIELDS.has(field) || field.includes("Type") || field.includes("Mode")) return "select";
  if (DATE_FIELDS.some((d) => field.includes(d)) || field.toLowerCase().includes("date")) return "date";
  if (field.toLowerCase().includes("email")) return "email";
  if (field.toLowerCase().includes("amount") || field.toLowerCase().includes("limit") || field.toLowerCase().includes("quantity")) return "number";
  return "text";
}

export function isFormAction(action) {
  const lower = action.toLowerCase();
  return (
    lower.includes("new") ||
    lower.includes("edit") ||
    lower.includes("add") ||
    lower.includes("create") ||
    lower.includes("block") ||
  lower.includes("change") ||
  lower.includes("configure") ||
  lower.includes("allocate") ||
    lower.includes("post") ||
    lower.includes("prepare") ||
    lower.includes("split") ||
    lower.includes("settle") ||
    lower.includes("close") ||
    lower.includes("block") ||
    lower.includes("release") ||
    lower.includes("shift") ||
    lower.includes("print") ||
    lower.includes("generate") ||
    lower.includes("export") ||
    lower === "save"
  );
}

export function isDestructiveAction(action) {
  const lower = action.toLowerCase();
  return lower.includes("cancel") || lower.includes("delete");
}

export function isInfoAction(action) {
  const lower = action.toLowerCase();
  return lower.includes("export") || lower.includes("print") || lower.includes("generate");
}

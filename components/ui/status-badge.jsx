const statusStyles = {
  Confirmed: "bg-blue-50 text-blue-700 border-blue-200",
  "Checked In": "bg-green-50 text-green-700 border-green-200",
  Pending: "bg-amber-50 text-amber-700 border-amber-200",
  Active: "bg-green-50 text-green-700 border-green-200",
  Inactive: "bg-gray-50 text-gray-600 border-gray-200",
  Occupied: "bg-blue-50 text-blue-700 border-blue-200",
  Available: "bg-green-50 text-green-700 border-green-200",
  Dirty: "bg-red-50 text-red-700 border-red-200",
  Clean: "bg-emerald-50 text-emerald-700 border-emerald-200",
  Reserved: "bg-purple-50 text-purple-700 border-purple-200",
  Maintenance: "bg-orange-50 text-orange-700 border-orange-200",
  Allocated: "bg-green-50 text-green-700 border-green-200",
  Approved: "bg-green-50 text-green-700 border-green-200",
  Received: "bg-green-50 text-green-700 border-green-200",
  Generated: "bg-blue-50 text-blue-700 border-blue-200",
  "Bill Printed": "bg-amber-50 text-amber-700 border-amber-200",
  "In Progress": "bg-blue-50 text-blue-700 border-blue-200",
  Completed: "bg-green-50 text-green-700 border-green-200",
  Discarded: "bg-gray-50 text-gray-600 border-gray-200",
  "In Transit": "bg-amber-50 text-amber-700 border-amber-200",
  OK: "bg-green-50 text-green-700 border-green-200",
  Low: "bg-red-50 text-red-700 border-red-200",
  "Not Ready": "bg-orange-50 text-orange-700 border-orange-200",
};

export function StatusBadge({ status }) {
  const style = statusStyles[status] || "bg-gray-50 text-gray-600 border-gray-200";
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${style}`}>
      {status}
    </span>
  );
}

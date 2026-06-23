"use client";

import { useState } from "react";
import { StatusBadge } from "./status-badge";

function formatCell(value, column) {
  if (column.type === "status") return <StatusBadge status={value} />;
  if (column.type === "currency") {
    const num = typeof value === "number" ? value : parseFloat(String(value).replace(/[^0-9.]/g, ""));
    return isNaN(num) ? value : `₹${num.toLocaleString("en-IN")}`;
  }
  return value ?? "—";
}

export function DataTable({
  columns,
  data,
  searchable = true,
  selectable = false,
  selectedRow,
  onRowSelect,
}) {
  const [search, setSearch] = useState("");

  const filtered = searchable
    ? data.filter((row) =>
        Object.values(row).some((val) =>
          String(val).toLowerCase().includes(search.toLowerCase())
        )
      )
    : data;

  const getRowKey = (row, i) => row.id ?? row.roomNo ?? row.tableNo ?? i;

  const isSelected = (row, i) => {
    if (!selectedRow) return false;
    const key = getRowKey(row, i);
    const selectedKey = selectedRow.id ?? selectedRow.roomNo ?? selectedRow.tableNo;
    return key === selectedKey;
  };

  return (
    <div>
      {searchable && (
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full max-w-xs rounded-lg border border-border bg-white px-3 py-2 text-sm focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
          />
        </div>
      )}
      <div className="overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border bg-gray-50/80">
              {columns.map((col) => (
                <th key={col.key} className="px-4 py-3 text-left text-xs font-semibold text-muted uppercase tracking-wide whitespace-nowrap">
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border bg-white">
            {filtered.length === 0 ? (
              <tr>
                <td colSpan={columns.length} className="px-4 py-8 text-center text-muted">
                  No records found
                </td>
              </tr>
            ) : (
              filtered.map((row, i) => (
                <tr
                  key={getRowKey(row, i)}
                  onClick={() => selectable && onRowSelect?.(row)}
                  className={`transition-colors ${
                    selectable ? "cursor-pointer" : ""
                  } ${
                    isSelected(row, i)
                      ? "bg-primary/5 ring-1 ring-inset ring-primary/30"
                      : "hover:bg-gray-50/50"
                  }`}
                >
                  {columns.map((col) => (
                    <td key={col.key} className="px-4 py-3 text-foreground whitespace-nowrap">
                      {formatCell(row[col.key], col)}
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-xs text-muted">
        {filtered.length} record(s)
        {selectable && selectedRow && " — 1 selected"}
      </p>
    </div>
  );
}

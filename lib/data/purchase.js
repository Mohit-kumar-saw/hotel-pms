export const units = [
  { id: "U-01", name: "Kilogram", abbreviation: "Kg", status: "Active" },
  { id: "U-02", name: "Litre", abbreviation: "Ltr", status: "Active" },
  { id: "U-03", name: "Piece", abbreviation: "Pcs", status: "Active" },
  { id: "U-04", name: "Box", abbreviation: "Box", status: "Active" },
];

export const categories = [
  { id: "CAT-01", name: "Food & Beverages", parent: "—", items: 156, status: "Active" },
  { id: "CAT-02", name: "Housekeeping", parent: "—", items: 89, status: "Active" },
  { id: "CAT-03", name: "Maintenance", parent: "—", items: 45, status: "Active" },
  { id: "CAT-04", name: "Office Supplies", parent: "—", items: 32, status: "Active" },
];

export const products = [
  { id: "PRD-01", name: "Basmati Rice", category: "Food & Beverages", unit: "Kg", rate: 85, stock: 150, status: "Active" },
  { id: "PRD-02", name: "Toilet Paper", category: "Housekeeping", unit: "Box", rate: 450, stock: 25, status: "Active" },
  { id: "PRD-03", name: "Light Bulb LED", category: "Maintenance", unit: "Pcs", rate: 120, stock: 48, status: "Active" },
];

export const suppliers = [
  { id: "SUP-01", name: "Fresh Foods Pvt Ltd", contact: "Ramesh Patil", phone: "+91 98765 00001", email: "ramesh@freshfoods.com", gstNo: "27AABCF1234A1Z1", status: "Active" },
  { id: "SUP-02", name: "CleanPro Supplies", contact: "Anjali Shah", phone: "+91 98765 00002", email: "anjali@cleanpro.com", gstNo: "27AABCC5678B1Z2", status: "Active" },
];

export const purchaseOrders = [
  { id: "PO-001", date: "20 Jun 2026", supplier: "Fresh Foods Pvt Ltd", items: 8, amount: 45000, status: "Approved", deliveryDate: "25 Jun 2026" },
  { id: "PO-002", date: "22 Jun 2026", supplier: "CleanPro Supplies", items: 5, amount: 12500, status: "Pending", deliveryDate: "28 Jun 2026" },
  { id: "PO-003", date: "15 Jun 2026", supplier: "Fresh Foods Pvt Ltd", items: 12, amount: 68000, status: "Received", deliveryDate: "20 Jun 2026" },
];

export const stockRegister = [
  { id: "SR-001", date: "23 Jun 2026", item: "Basmati Rice", type: "Issue", quantity: 10, balance: 140, department: "Main Kitchen" },
  { id: "SR-002", date: "22 Jun 2026", item: "Basmati Rice", type: "Receive", quantity: 50, balance: 150, department: "Store" },
  { id: "SR-003", date: "23 Jun 2026", item: "Toilet Paper", type: "Issue", quantity: 2, balance: 23, department: "Housekeeping" },
];

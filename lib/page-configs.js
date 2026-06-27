import { rooms } from "@/lib/data/front-office";
import { frontOfficePageConfigs } from "@/lib/page-configs/front-office";
import {
  restaurantTables,
  conferenceBookings,
  foodCategories,
  foodItems,
  barItems,
  inventory,
} from "@/lib/data/fnb";
import {
  roomCategories,
  bedTypes,
  publicAreas,
  cleaningAssignments,
  linenMovement,
  laundryList,
} from "@/lib/data/housekeeping";
import {
  units,
  categories,
  products,
  suppliers,
  purchaseOrders,
  stockRegister,
} from "@/lib/data/purchase";

const reportColumns = [
  { key: "id", label: "ID" },
  { key: "date", label: "Date" },
  { key: "description", label: "Description" },
  { key: "amount", label: "Amount" },
  { key: "status", label: "Status", type: "status" },
];

const sampleReports = [
  { id: "RPT-001", date: "23 Jun 2026", description: "Sample report entry", amount: 15000, status: "Generated" },
  { id: "RPT-002", date: "22 Jun 2026", description: "Sample report entry", amount: 12500, status: "Generated" },
  { id: "RPT-003", date: "21 Jun 2026", description: "Sample report entry", amount: 9800, status: "Generated" },
];

export const pageConfigs = {
  ...frontOfficePageConfigs,
};

// F&B restaurant pages
["/fnb/restaurant-1/new-table", "/fnb/restaurant-2/new-table"].forEach((path) => {
  pageConfigs[path] = {
    type: "form",
    title: path.includes("1") ? "Restaurant #1 — New Table" : "Restaurant #2 — New Table",
    description: "Create new table — Table No, Waiter, Guest Type, Items, Prepare KOT.",
    formFields: ["Table No", "Waiter Name", "Guest Type", "Items", "Prepare KOT"],
  };
});

["/fnb/restaurant-1/table-status", "/fnb/restaurant-2/table-status"].forEach((path) => {
  pageConfigs[path] = {
    type: "data-table",
    title: path.includes("1") ? "Restaurant #1 — Table Status" : "Restaurant #2 — Table Status",
    description: "View and manage table status — edit, shift, delete tables and items.",
    columns: [
      { key: "tableNo", label: "Table No" },
      { key: "waiter", label: "Waiter" },
      { key: "guestType", label: "Guest Type" },
      { key: "items", label: "Items" },
      { key: "amount", label: "Amount", type: "currency" },
      { key: "status", label: "Status", type: "status" },
      { key: "kot", label: "KOT" },
    ],
    data: restaurantTables,
  };
});

["/fnb/restaurant-1/cashiers-report", "/fnb/restaurant-2/cashiers-report"].forEach((path) => {
  pageConfigs[path] = { type: "report", title: `${path.includes("1") ? "Restaurant #1" : "Restaurant #2"} — Cashier's Report`, description: "Shift-wise collection report.", columns: reportColumns, data: sampleReports };
});

["/fnb/restaurant-1/cashiers-closing", "/fnb/restaurant-2/cashiers-closing"].forEach((path) => {
  pageConfigs[path] = { type: "closing", title: `${path.includes("1") ? "Restaurant #1" : "Restaurant #2"} — Cashier's Closing`, description: "End-of-shift closing.", formFields: ["Shift", "Cash", "Card", "UPI", "Room Charge", "Closing Balance"] };
});

["/fnb/restaurant-1/day-close", "/fnb/restaurant-2/day-close"].forEach((path) => {
  pageConfigs[path] = { type: "closing", title: `${path.includes("1") ? "Restaurant #1" : "Restaurant #2"} — Day Close`, description: "End-of-day restaurant closing.", formFields: ["Business Date", "Total Sales", "Total Collection", "Remarks"] };
});

// Conference / Lawn
["/fnb/conference-room-1/bookings", "/fnb/conference-room-2/bookings", "/fnb/lawn/bookings"].forEach((path) => {
  const name = path.includes("conference-room-1") ? "Conference Room #1" : path.includes("conference-room-2") ? "Conference Room #2" : "Lawn";
  pageConfigs[path] = {
    type: "data-table",
    title: `${name} — Hall Booking List`,
    description: "New Booking / Edit / Cancel hall reservations.",
    actions: ["New Booking", "Edit", "Cancel"],
    columns: [
      { key: "id", label: "Booking ID" },
      { key: "client", label: "Client" },
      { key: "event", label: "Event" },
      { key: "date", label: "Date" },
      { key: "pax", label: "Pax" },
      { key: "hall", label: "Hall" },
      { key: "amount", label: "Amount", type: "currency" },
      { key: "status", label: "Status", type: "status" },
    ],
    data: conferenceBookings,
  };
});

["menu-posting", "conference-requirement", "close-booking"].forEach((action) => {
  ["/fnb/conference-room-1", "/fnb/conference-room-2", "/fnb/lawn"].forEach((base) => {
    const name = base.includes("conference-room-1") ? "Conference Room #1" : base.includes("conference-room-2") ? "Conference Room #2" : "Lawn";
    const titles = { "menu-posting": "Menu Posting", "conference-requirement": "Conference Requirement", "close-booking": "Close Booking" };
    pageConfigs[`${base}/${action}`] = {
      type: action === "close-booking" ? "form" : "data-table",
      title: `${name} — ${titles[action]}`,
      description: `${titles[action]} for ${name}.`,
      ...(action !== "close-booking" ? { columns: reportColumns, data: sampleReports } : { formFields: ["Booking ID", "Client", "Event Date", "Final Amount", "Payment Mode"] }),
    };
  });
});

// Kitchen pages
["main-kitchen", "indian-kitchen", "continental-kitchen", "italian-kitchen"].forEach((kitchen) => {
  const label = kitchen.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
  const base = `/fnb/kitchen/${kitchen}`;
  pageConfigs[`${base}/food-category`] = { type: "master-list", title: `${label} — Food Category`, description: "Category Name / Sub Category / Parent Category", columns: [{ key: "id", label: "ID" }, { key: "name", label: "Category" }, { key: "subCategory", label: "Sub Category" }, { key: "parentCategory", label: "Parent" }, { key: "items", label: "Items" }, { key: "status", label: "Status", type: "status" }], data: foodCategories };
  pageConfigs[`${base}/food-items`] = { type: "master-list", title: `${label} — Food Items`, description: "Add / Edit / Delete food items", columns: [{ key: "id", label: "ID" }, { key: "name", label: "Item" }, { key: "category", label: "Category" }, { key: "price", label: "Price", type: "currency" }, { key: "kitchen", label: "Kitchen" }, { key: "status", label: "Status", type: "status" }], data: foodItems };
  pageConfigs[`${base}/food-list`] = { type: "data-table", title: `${label} — Food List`, description: "Complete food menu list.", columns: [{ key: "id", label: "ID" }, { key: "name", label: "Item" }, { key: "category", label: "Category" }, { key: "price", label: "Price", type: "currency" }, { key: "status", label: "Status", type: "status" }], data: foodItems };
  pageConfigs[`${base}/manage-add-ons`] = { type: "master-list", title: `${label} — Manage Add-Ons`, description: "Configure food add-ons and extras.", columns: [{ key: "id", label: "ID" }, { key: "name", label: "Add-On" }, { key: "price", label: "Price", type: "currency" }, { key: "status", label: "Status", type: "status" }], data: [{ id: "AO-01", name: "Extra Cheese", price: 80, status: "Active" }, { id: "AO-02", name: "Garlic Bread", price: 120, status: "Active" }] };
  pageConfigs[`${base}/create-requisition`] = { type: "data-table", title: `${label} — Create Requisition`, description: "New / Edit / Delete requisitions.", columns: [{ key: "id", label: "Req ID" }, { key: "date", label: "Date" }, { key: "description", label: "Description" }, { key: "amount", label: "Amount", type: "currency" }, { key: "status", label: "Status", type: "status" }], data: sampleReports };
  pageConfigs[`${base}/spoilage-breakage`] = { type: "form", title: `${label} — Spoilage / Breakage`, description: "Post spoilage and breakage entries.", formFields: ["Date", "Item", "Quantity", "Reason", "Value"] };
  pageConfigs[`${base}/stock-movement`] = { type: "data-table", title: `${label} — Stock Movement`, description: "Track stock in/out movements.", columns: [{ key: "id", label: "ID" }, { key: "date", label: "Date" }, { key: "description", label: "Item" }, { key: "amount", label: "Qty" }, { key: "status", label: "Type", type: "status" }], data: sampleReports };
});

// BAR
const barBase = "/fnb/bar";
pageConfigs[`${barBase}/beverage-category`] = { type: "master-list", title: "BAR — Beverage Category", description: "Category Name / Sub Category / Parent Category", columns: [{ key: "id", label: "ID" }, { key: "name", label: "Category" }, { key: "subCategory", label: "Sub Category" }, { key: "items", label: "Items" }, { key: "status", label: "Status", type: "status" }], data: foodCategories };
pageConfigs[`${barBase}/bar-items`] = { type: "master-list", title: "BAR — Bar Items", description: "Add / Edit / Delete bar items", columns: [{ key: "id", label: "ID" }, { key: "name", label: "Item" }, { key: "category", label: "Category" }, { key: "price", label: "Price", type: "currency" }, { key: "stock", label: "Stock" }, { key: "status", label: "Status", type: "status" }], data: barItems };
pageConfigs[`${barBase}/bar-list`] = { type: "data-table", title: "BAR — Bar List", description: "Complete bar menu list.", columns: [{ key: "id", label: "ID" }, { key: "name", label: "Item" }, { key: "category", label: "Category" }, { key: "price", label: "Price", type: "currency" }, { key: "status", label: "Status", type: "status" }], data: barItems };
pageConfigs[`${barBase}/manage-add-ons`] = { type: "master-list", title: "BAR — Manage Add-Ons", description: "Configure bar add-ons.", columns: [{ key: "id", label: "ID" }, { key: "name", label: "Add-On" }, { key: "price", label: "Price", type: "currency" }, { key: "status", label: "Status", type: "status" }], data: [{ id: "BA-01", name: "Extra Shot", price: 150, status: "Active" }] };
pageConfigs[`${barBase}/create-requisition`] = { type: "data-table", title: "BAR — Create Requisition", description: "Bar stock requisitions.", columns: reportColumns, data: sampleReports };
pageConfigs[`${barBase}/spoilage-breakage`] = { type: "form", title: "BAR — Spoilage / Breakage", description: "Post bar spoilage entries.", formFields: ["Date", "Item", "Quantity", "Reason", "Value"] };
pageConfigs[`${barBase}/stock-movement`] = { type: "data-table", title: "BAR — Stock Movement", description: "Bar stock movements.", columns: reportColumns, data: sampleReports };

// F&B Controls
const controlPages = {
  "food-inventory": { title: "Food Inventory", data: inventory },
  "beverage-inventory": { title: "Beverage Inventory", data: barItems },
  "stores-inventory": { title: "Stores Inventory", data: inventory },
  "spoilage-authorize": { title: "Spoilage / Breakage Authorize", type: "form" },
  "stock-movement-authorize": { title: "Stock Movement Authorize", type: "form" },
  "food-costing": { title: "Food Costing", type: "report" },
  "beverage-costing": { title: "Beverage Costing", type: "report" },
};
Object.entries(controlPages).forEach(([key, cfg]) => {
  pageConfigs[`/fnb/controls/${key}`] = cfg.type === "form"
    ? { type: "form", title: `F & B Controls — ${cfg.title}`, description: `Authorize ${cfg.title.toLowerCase()}.`, formFields: ["Reference No", "Date", "Item", "Quantity", "Approved By"] }
    : cfg.type === "report"
    ? { type: "report", title: `F & B Controls — ${cfg.title}`, description: `${cfg.title} analysis.`, columns: reportColumns, data: sampleReports }
  : { type: "data-table", title: `F & B Controls — ${cfg.title}`, description: `Manage ${cfg.title.toLowerCase()}.`, columns: [{ key: "id", label: "ID" }, { key: "item", label: "Item" }, { key: "category", label: "Category" }, { key: "stock", label: "Stock" }, { key: "status", label: "Status", type: "status" }], data: cfg.data };
});

// F&B Reports
["sales", "collection", "cost", "inventory", "spoilage-breakage", "stock-movement", "log", "requisition"].forEach((report) => {
  const titles = { sales: "Sales Report", collection: "Collection Report", cost: "Cost Reports", inventory: "Inventory Report", "spoilage-breakage": "Spoilage / Breakage Report", "stock-movement": "Stock Movement Report", log: "Log Report", requisition: "Requisition Report" };
  pageConfigs[`/fnb/reports/${report}`] = { type: "report", title: `F & B — ${titles[report]}`, description: titles[report], columns: reportColumns, data: sampleReports };
});

// Front office reports
["arrivals", "departures", "in-house", "cancelled", "unexpected-departures", "postings", "cashiers-report"].forEach((report) => {
  const titles = { arrivals: "Arrivals Report", departures: "Departures Report", "in-house": "In-House Report", cancelled: "Cancelled Report", "unexpected-departures": "Unexpected Departures", postings: "Postings Report", "cashiers-report": "Cashier's Report" };
  pageConfigs[`/front-office/reports/${report}`] = { type: "report", title: titles[report], description: `Front office ${titles[report].toLowerCase()}.`, columns: reportColumns, data: sampleReports };
});

// Housekeeping
pageConfigs["/housekeeping/room-master"] = { type: "master-list", title: "Room Master", description: "Room categories, bed types, floor plan, room numbers, and facilities.", columns: [{ key: "id", label: "ID" }, { key: "name", label: "Category" }, { key: "description", label: "Description" }, { key: "rooms", label: "Rooms" }, { key: "status", label: "Status", type: "status" }], data: roomCategories };
pageConfigs["/housekeeping/public-area-master"] = { type: "master-list", title: "Public Area Master", description: "Lobby, Parking, Pool, Gym, etc.", columns: [{ key: "id", label: "ID" }, { key: "name", label: "Area" }, { key: "category", label: "Category" }, { key: "facilities", label: "Facilities" }, { key: "status", label: "Status", type: "status" }], data: publicAreas };
pageConfigs["/housekeeping/room-cleaning"] = { type: "data-table", title: "Room Cleaning", description: "Assign supervisors and track room cleaning.", columns: [{ key: "id", label: "ID" }, { key: "supervisor", label: "Supervisor" }, { key: "rooms", label: "Rooms" }, { key: "status", label: "Status", type: "status" }, { key: "remarks", label: "Remarks" }], data: cleaningAssignments };
pageConfigs["/housekeeping/public-area-cleaning"] = { type: "data-table", title: "Public Area Cleaning", description: "Assign and track public area cleaning.", columns: [{ key: "id", label: "ID" }, { key: "name", label: "Area" }, { key: "category", label: "Category" }, { key: "status", label: "Status", type: "status" }], data: publicAreas };
pageConfigs["/housekeeping/change-room-status"] = { type: "room-grid", title: "Change Room Status", description: "Update room status from Dirty to Clean.", data: rooms };
pageConfigs["/housekeeping/block-rooms"] = { type: "form", title: "Block Rooms", description: "Block rooms with date/time and reason.", formFields: ["Room No", "From Date", "To Date", "Reason", "Release"] };
pageConfigs["/housekeeping/block-public-area"] = { type: "form", title: "Block Public Area", description: "Block public areas for maintenance.", formFields: ["Area", "From Date", "To Date", "Reason", "Release"] };
pageConfigs["/housekeeping/linen-movement"] = { type: "data-table", title: "Linen Movement", description: "Track linen issue and return.", columns: [{ key: "id", label: "ID" }, { key: "date", label: "Date" }, { key: "item", label: "Item" }, { key: "from", label: "From" }, { key: "to", label: "To" }, { key: "quantity", label: "Qty" }], data: linenMovement };
pageConfigs["/housekeeping/item-movement"] = { type: "data-table", title: "Item Movement", description: "Track housekeeping item movements.", columns: reportColumns, data: sampleReports };
pageConfigs["/housekeeping/laundry-list"] = { type: "data-table", title: "Laundry List", description: "Add items for laundry and mark when received.", columns: [{ key: "id", label: "ID" }, { key: "item", label: "Item" }, { key: "quantity", label: "Qty" }, { key: "sentDate", label: "Sent" }, { key: "receivedDate", label: "Received" }, { key: "status", label: "Status", type: "status" }], data: laundryList };
pageConfigs["/housekeeping/linen-discards"] = { type: "master-list", title: "Linen Discards", description: "Record discarded linen items.", columns: [{ key: "id", label: "ID" }, { key: "item", label: "Item" }, { key: "quantity", label: "Qty" }, { key: "date", label: "Date" }, { key: "status", label: "Status", type: "status" }], data: [{ id: "LD-01", item: "Bath Towel", quantity: 5, date: "20 Jun 2026", status: "Discarded" }] };
pageConfigs["/housekeeping/create-requisition"] = { type: "data-table", title: "Create Requisition", description: "Housekeeping requisitions.", columns: reportColumns, data: sampleReports };
pageConfigs["/housekeeping/reports"] = { type: "report", title: "Housekeeping Reports", description: "Housekeeping reports (menu to be updated).", columns: reportColumns, data: sampleReports };

// Purchase & Stores
pageConfigs["/purchase/unit-master"] = { type: "master-list", title: "Unit Master", description: "Measurement units for inventory.", columns: [{ key: "id", label: "ID" }, { key: "name", label: "Unit" }, { key: "abbreviation", label: "Abbr" }, { key: "status", label: "Status", type: "status" }], data: units };
pageConfigs["/purchase/category-master"] = { type: "master-list", title: "Category Master", description: "Product categories.", columns: [{ key: "id", label: "ID" }, { key: "name", label: "Category" }, { key: "parent", label: "Parent" }, { key: "items", label: "Items" }, { key: "status", label: "Status", type: "status" }], data: categories };
pageConfigs["/purchase/product-master"] = { type: "master-list", title: "Product Master", description: "Product catalog.", columns: [{ key: "id", label: "ID" }, { key: "name", label: "Product" }, { key: "category", label: "Category" }, { key: "unit", label: "Unit" }, { key: "rate", label: "Rate", type: "currency" }, { key: "stock", label: "Stock" }, { key: "status", label: "Status", type: "status" }], data: products };
pageConfigs["/purchase/supplier-master"] = { type: "master-list", title: "Supplier Master", description: "Vendor and supplier details.", columns: [{ key: "id", label: "ID" }, { key: "name", label: "Supplier" }, { key: "contact", label: "Contact" }, { key: "phone", label: "Phone" }, { key: "email", label: "Email" }, { key: "status", label: "Status", type: "status" }], data: suppliers };
pageConfigs["/purchase/purchase-order"] = { type: "data-table", title: "Purchase Order", description: "New / Edit / Delete purchase orders.", actions: ["New PO", "Edit", "Delete"], columns: [{ key: "id", label: "PO No" }, { key: "date", label: "Date" }, { key: "supplier", label: "Supplier" }, { key: "items", label: "Items" }, { key: "amount", label: "Amount", type: "currency" }, { key: "deliveryDate", label: "Delivery" }, { key: "status", label: "Status", type: "status" }], data: purchaseOrders };
pageConfigs["/purchase/purchase-return"] = { type: "data-table", title: "Purchase Return", description: "Return goods to suppliers.", columns: reportColumns, data: sampleReports };
pageConfigs["/purchase/stock-register"] = { type: "data-table", title: "Stock Register", description: "Receive / Issue stock entries.", columns: [{ key: "id", label: "ID" }, { key: "date", label: "Date" }, { key: "item", label: "Item" }, { key: "type", label: "Type" }, { key: "quantity", label: "Qty" }, { key: "balance", label: "Balance" }, { key: "department", label: "Department" }], data: stockRegister };
pageConfigs["/purchase/spoilage-breakage"] = { type: "form", title: "Spoilage / Breakage", description: "Post store spoilage entries.", formFields: ["Date", "Item", "Quantity", "Reason", "Value"] };
pageConfigs["/purchase/par-stock-items"] = { type: "data-table", title: "Par Stock Items", description: "Minimum stock level items.", columns: [{ key: "id", label: "ID" }, { key: "item", label: "Item" }, { key: "stock", label: "Current" }, { key: "parLevel", label: "Par Level" }, { key: "status", label: "Status", type: "status" }], data: inventory };

["stock-register", "purchase", "issues", "par-stock", "spoilage-breakage", "purchase-order", "purchase-return"].forEach((report) => {
  const titles = { "stock-register": "Stock Register Report", purchase: "Purchase Report", issues: "Issues Report", "par-stock": "Par Stock Report", "spoilage-breakage": "Spoilage / Breakage Report", "purchase-order": "Purchase Order Report", "purchase-return": "Purchase Return Report" };
  pageConfigs[`/purchase/reports/${report}`] = { type: "report", title: titles[report], description: titles[report], columns: reportColumns, data: sampleReports };
});

// Placeholder modules
pageConfigs["/human-resource"] = { type: "placeholder", title: "Human Resource", description: "HR module — employee management, attendance, payroll. Dropdowns from current software to be integrated.", module: "Human Resource" };
pageConfigs["/accounts"] = { type: "placeholder", title: "Accounts", description: "Accounts module — to be updated. For now, same dropdowns as current software.", module: "Accounts" };
pageConfigs["/sales-marketing"] = { type: "placeholder", title: "Sales & Marketing", description: "Sales & Marketing module — to be worked on later.", module: "Sales & Marketing" };
pageConfigs["/maintenance"] = { type: "placeholder", title: "Maintenance", description: "Maintenance module — duty roster, maintenance orders, budgeting per department.", module: "Maintenance" };

export function getPageConfig(href) {
  return pageConfigs[href] || {
    type: "placeholder",
    title: "Page",
    description: "This page is under development.",
    module: "General",
  };
}

export const roomCategories = [
  { id: "RC-01", name: "Standard", description: "Basic room with essential amenities", rooms: 80, status: "Active" },
  { id: "RC-02", name: "Deluxe", description: "Spacious room with premium amenities", rooms: 120, status: "Active" },
  { id: "RC-03", name: "Suite", description: "Luxury suite with living area", rooms: 40, status: "Active" },
  { id: "RC-04", name: "Executive", description: "Business class room", rooms: 16, status: "Active" },
];

export const bedTypes = [
  { id: "BT-01", name: "King", size: "76\" x 80\"", status: "Active" },
  { id: "BT-02", name: "Queen", size: "60\" x 80\"", status: "Active" },
  { id: "BT-03", name: "Twin", size: "38\" x 75\" (x2)", status: "Active" },
];

export const publicAreas = [
  { id: "PA-01", name: "Lobby", category: "Common Area", facilities: "AC, WiFi, Seating", status: "Active" },
  { id: "PA-02", name: "Swimming Pool", category: "Recreation", facilities: "Lifeguard, Towels", status: "Active" },
  { id: "PA-03", name: "Gym", category: "Recreation", facilities: "Equipment, AC", status: "Active" },
  { id: "PA-04", name: "Parking", category: "Parking", facilities: "CCTV, Valet", status: "Active" },
];

export const cleaningAssignments = [
  { id: "CA-01", supervisor: "Meena Devi", rooms: "101, 102, 103, 104", status: "In Progress", remarks: "—" },
  { id: "CA-02", supervisor: "Lakshmi Bai", rooms: "201, 202, 203, 204", status: "Completed", remarks: "Room 203 — AC filter cleaned" },
  { id: "CA-03", supervisor: "Kamala Devi", rooms: "301, 302, 303", status: "Pending", remarks: "—" },
];

export const linenMovement = [
  { id: "LM-01", date: "23 Jun 2026", item: "Bath Towels", from: "Laundry", to: "Floor 2", quantity: 50, issuedBy: "Store Keeper" },
  { id: "LM-02", date: "23 Jun 2026", item: "Bed Sheets", from: "Floor 3", to: "Laundry", quantity: 30, issuedBy: "HK Supervisor" },
];

export const laundryList = [
  { id: "LAU-01", item: "Bath Towels", quantity: 45, sentDate: "22 Jun 2026", receivedDate: "23 Jun 2026", status: "Received" },
  { id: "LAU-02", item: "Bed Sheets", quantity: 60, sentDate: "23 Jun 2026", receivedDate: "—", status: "Pending" },
  { id: "LAU-03", item: "Pillow Covers", quantity: 80, sentDate: "23 Jun 2026", receivedDate: "—", status: "In Transit" },
];

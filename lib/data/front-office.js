// ─── Reservations ───────────────────────────────────────────────────────────

export const reservationList = [
  { id: "BK-1042", guestName: "Rahul Sharma", mobile: "+91 98765 11111", room: "204", checkIn: "23 Jun 2026", checkOut: "26 Jun 2026", balance: 8500, status: "Confirmed", source: "Walk-in", roomType: "Deluxe" },
  { id: "BK-1041", guestName: "Priya Patel", mobile: "+91 98765 22222", room: "501", checkIn: "23 Jun 2026", checkOut: "25 Jun 2026", balance: 0, status: "Confirmed", source: "Corporate", roomType: "Suite" },
  { id: "BK-1040", guestName: "James Wilson", mobile: "+1 555 123 4567", room: "112", checkIn: "22 Jun 2026", checkOut: "27 Jun 2026", balance: 3200, status: "Checked In", source: "Booking.com", roomType: "Standard" },
  { id: "BK-1039", guestName: "Anita Desai", mobile: "+91 98765 33333", room: "308", checkIn: "23 Jun 2026", checkOut: "24 Jun 2026", balance: 5500, status: "Reserved", source: "Agoda", roomType: "Deluxe" },
  { id: "BK-1038", guestName: "Michael Chen", mobile: "+86 138 0000 1234", room: "105", checkIn: "24 Jun 2026", checkOut: "28 Jun 2026", balance: 10000, status: "Reserved", source: "MakeMyTrip", roomType: "Standard" },
  { id: "BK-1037", guestName: "Sarah Johnson", mobile: "+44 7700 900123", room: "201", checkIn: "20 Jun 2026", checkOut: "22 Jun 2026", balance: 0, status: "Checked Out", source: "Website", roomType: "Deluxe" },
  { id: "BK-1036", guestName: "Vikram Mehta", mobile: "+91 98765 44444", room: "—", checkIn: "25 Jun 2026", checkOut: "26 Jun 2026", balance: 4500, status: "Cancelled", source: "Travel Agent", roomType: "Standard" },
  { id: "BK-1035", guestName: "Emma Watson", mobile: "+44 7700 900456", room: "302", checkIn: "21 Jun 2026", checkOut: "23 Jun 2026", balance: 6500, status: "No Show", source: "Booking.com", roomType: "Suite" },
];

export const groupBookings = [
  { id: "GRP-001", groupName: "TechCorp Annual Meet", contactPerson: "Rajesh Kumar", rooms: 15, pax: 30, checkIn: "28 Jun 2026", checkOut: "30 Jun 2026", amount: 225000, status: "Confirmed" },
  { id: "GRP-002", groupName: "Wedding — Sharma Family", contactPerson: "Amit Sharma", rooms: 25, pax: 60, checkIn: "05 Jul 2026", checkOut: "08 Jul 2026", amount: 450000, status: "Confirmed" },
];

export const roomBookings = reservationList;

// ─── Masters (legacy) ───────────────────────────────────────────────────────

export const companies = [
  { id: "CMP-001", name: "TechCorp Ltd", contactPerson: "Rajesh Kumar", email: "rajesh@techcorp.com", phone: "+91 98765 43210", creditAllowed: "Y", creditLimit: 500000, settlementType: "Monthly", gstNo: "27AABCT1234F1Z5", state: "Maharashtra", status: "Active" },
  { id: "CMP-002", name: "Global Travels", contactPerson: "Sunita Mehta", email: "sunita@globaltravels.com", phone: "+91 98765 43211", creditAllowed: "Y", creditLimit: 200000, settlementType: "Fortnightly", gstNo: "27AABCG5678G1Z6", state: "Maharashtra", status: "Active" },
  { id: "CMP-003", name: "Infosys Events", contactPerson: "Vikram Singh", email: "vikram@infosys.com", phone: "+91 98765 43212", creditAllowed: "N", creditLimit: 0, settlementType: "Immediate", gstNo: "29AABCI9012H1Z7", state: "Karnataka", status: "Active" },
];

export const bookingTypes = [
  { id: "BT-01", name: "Corporate", description: "Corporate company bookings", status: "Active" },
  { id: "BT-02", name: "Travel Agent", description: "Bookings via travel agents", status: "Active" },
  { id: "BT-03", name: "Online", description: "OTA and website bookings", status: "Active" },
  { id: "BT-04", name: "Walk In", description: "Direct walk-in guests", status: "Active" },
];

export const bookingSources = [
  { id: "BS-01", name: "Walk-in", commission: "0%", status: "Active" },
  { id: "BS-02", name: "Website", commission: "0%", status: "Active" },
  { id: "BS-03", name: "Booking.com", commission: "15%", status: "Active" },
  { id: "BS-04", name: "Agoda", commission: "18%", status: "Active" },
  { id: "BS-05", name: "MakeMyTrip", commission: "16%", status: "Active" },
  { id: "BS-06", name: "Travel Agent", commission: "10%", status: "Active" },
  { id: "BS-07", name: "Corporate", commission: "0%", status: "Active" },
];

export const roomCharges = [
  { id: "RC-01", roomCategory: "Standard", bedType: "Queen", rackRate: 4500, corporateRate: 3800, weekendRate: 5200, status: "Active" },
  { id: "RC-02", roomCategory: "Deluxe", bedType: "King", rackRate: 6500, corporateRate: 5500, weekendRate: 7500, status: "Active" },
  { id: "RC-03", roomCategory: "Suite", bedType: "King", rackRate: 12000, corporateRate: 10000, weekendRate: 14000, status: "Active" },
];

export const promoCodes = [
  { id: "PR-01", code: "SUMMER26", discount: "20%", validFrom: "01 Jun 2026", validTo: "31 Aug 2026", usageLimit: 100, used: 34, status: "Active" },
  { id: "PR-02", code: "CORP15", discount: "15%", validFrom: "01 Jan 2026", validTo: "31 Dec 2026", usageLimit: 500, used: 128, status: "Active" },
];

// ─── Guests ─────────────────────────────────────────────────────────────────

export const guests = [
  { id: "GST-001", firstName: "Rahul", lastName: "Sharma", name: "Rahul Sharma", phone: "+91 98765 11111", mobile: "+91 98765 11111", email: "rahul@email.com", nationality: "Indian", gender: "Male", dob: "15 Mar 1988", address: "12 MG Road", city: "Mumbai", state: "Maharashtra", country: "India", idType: "Aadhaar", idNo: "XXXX-XXXX-1234", visits: 5, lastStay: "15 May 2026", loyaltyPoints: 1250 },
  { id: "GST-002", firstName: "Priya", lastName: "Patel", name: "Priya Patel", phone: "+91 98765 22222", mobile: "+91 98765 22222", email: "priya@email.com", nationality: "Indian", gender: "Female", dob: "22 Jul 1992", address: "45 Park Street", city: "Pune", state: "Maharashtra", country: "India", idType: "Passport", idNo: "P1234567", visits: 3, lastStay: "10 Apr 2026", loyaltyPoints: 680 },
  { id: "GST-003", firstName: "James", lastName: "Wilson", name: "James Wilson", phone: "+1 555 123 4567", mobile: "+1 555 123 4567", email: "james@email.com", nationality: "American", gender: "Male", dob: "08 Jan 1985", address: "789 Oak Ave", city: "New York", state: "NY", country: "USA", idType: "Passport", idNo: "US9876543", visits: 1, lastStay: "22 Jun 2026", loyaltyPoints: 120 },
];

export const guestStayHistory = [
  { date: "22 Jun 2026", room: "112", nights: 5, amount: 22500, status: "Checked In" },
  { date: "15 May 2026", room: "204", nights: 2, amount: 13000, status: "Checked Out" },
  { date: "10 Jan 2026", room: "105", nights: 3, amount: 13500, status: "Checked Out" },
];

export const guestInvoices = [
  { id: "INV-8821", date: "17 May 2026", amount: 13000, gst: 2340, status: "Paid" },
  { id: "INV-7654", date: "13 Jan 2026", amount: 13500, gst: 2430, status: "Paid" },
];

// ─── In-House ───────────────────────────────────────────────────────────────

export const inHouseGuests = [
  { id: "IH-001", guest: "James Wilson", room: "112", checkIn: "22 Jun 2026", nights: 5, balance: 3200, restaurantBill: 1850, laundry: 450, status: "Checked In" },
  { id: "IH-002", guest: "A. Kumar", room: "101", checkIn: "20 Jun 2026", nights: 3, balance: 0, restaurantBill: 920, laundry: 0, status: "Checked In" },
  { id: "IH-003", guest: "S. Reddy", room: "202", checkIn: "21 Jun 2026", nights: 4, balance: 1500, restaurantBill: 2400, laundry: 320, status: "Checked In" },
  { id: "IH-004", guest: "P. Nair", room: "301", checkIn: "19 Jun 2026", nights: 6, balance: 0, restaurantBill: 3100, laundry: 680, status: "Checked In" },
];

export const todaysArrivals = [
  { id: "BK-1042", guest: "Rahul Sharma", roomType: "Deluxe", roomNo: "204", pax: 2, eta: "14:00", specialMessage: "Late check-in requested", allocation: "Allocated" },
  { id: "BK-1041", guest: "Priya Patel", roomType: "Suite", roomNo: "501", pax: 3, eta: "12:00", specialMessage: "Anniversary — flowers in room", allocation: "Allocated" },
  { id: "BK-1039", guest: "Anita Desai", roomType: "Deluxe", roomNo: "—", pax: 1, eta: "16:00", specialMessage: "—", allocation: "Pending" },
];

// ─── Rooms ──────────────────────────────────────────────────────────────────

export const rooms = [
  { roomNo: "101", floor: 1, category: "Standard", bedType: "Queen", status: "Occupied", guest: "A. Kumar", hkStatus: "Clean", maintStatus: "OK" },
  { roomNo: "102", floor: 1, category: "Standard", bedType: "Twin", status: "Vacant", guest: "—", hkStatus: "Clean", maintStatus: "OK" },
  { roomNo: "103", floor: 1, category: "Standard", bedType: "Queen", status: "Dirty", guest: "—", hkStatus: "Dirty", maintStatus: "OK" },
  { roomNo: "104", floor: 1, category: "Deluxe", bedType: "King", status: "Reserved", guest: "—", hkStatus: "Clean", maintStatus: "OK" },
  { roomNo: "105", floor: 1, category: "Standard", bedType: "Queen", status: "Occupied", guest: "M. Chen", hkStatus: "Clean", maintStatus: "OK" },
  { roomNo: "201", floor: 2, category: "Deluxe", bedType: "King", status: "Vacant", guest: "—", hkStatus: "Clean", maintStatus: "OK" },
  { roomNo: "202", floor: 2, category: "Deluxe", bedType: "King", status: "Occupied", guest: "S. Reddy", hkStatus: "Clean", maintStatus: "OK" },
  { roomNo: "203", floor: 2, category: "Deluxe", bedType: "Twin", status: "Vacant", guest: "—", hkStatus: "Clean", maintStatus: "OK" },
  { roomNo: "204", floor: 2, category: "Deluxe", bedType: "King", status: "Reserved", guest: "R. Sharma", hkStatus: "Clean", maintStatus: "OK" },
  { roomNo: "301", floor: 3, category: "Suite", bedType: "King", status: "Occupied", guest: "P. Nair", hkStatus: "Clean", maintStatus: "OK" },
  { roomNo: "302", floor: 3, category: "Suite", bedType: "King", status: "Maintenance", guest: "—", hkStatus: "Blocked", maintStatus: "AC Repair" },
  { roomNo: "501", floor: 5, category: "Suite", bedType: "King", status: "Reserved", guest: "P. Patel", hkStatus: "Clean", maintStatus: "OK" },
];

export const availabilityCalendar = {
  dates: ["24 Jun", "25 Jun", "26 Jun", "27 Jun"],
  rooms: [
    { room: "101", slots: ["occupied", "occupied", "free", "free"] },
    { room: "102", slots: ["free", "occupied", "occupied", "free"] },
    { room: "103", slots: ["free", "free", "free", "free"] },
    { room: "104", slots: ["occupied", "occupied", "occupied", "free"] },
    { room: "105", slots: ["occupied", "occupied", "occupied", "occupied"] },
    { room: "201", slots: ["free", "free", "occupied", "occupied"] },
    { room: "202", slots: ["occupied", "occupied", "occupied", "free"] },
  ],
};

// ─── Folio & Payments ───────────────────────────────────────────────────────

export const folioEntries = [
  { date: "22 Jun 2026", description: "Room Rent — Night 1", debit: 4500, credit: 0, balance: 4500 },
  { date: "22 Jun 2026", description: "Restaurant — Dinner", debit: 850, credit: 0, balance: 5350 },
  { date: "22 Jun 2026", description: "Advance Payment", debit: 0, credit: 5000, balance: 350 },
  { date: "23 Jun 2026", description: "Room Rent — Night 2", debit: 4500, credit: 0, balance: 4850 },
  { date: "23 Jun 2026", description: "Laundry", debit: 450, credit: 0, balance: 5300 },
  { date: "23 Jun 2026", description: "GST @ 18%", debit: 954, credit: 0, balance: 6254 },
];

export const checkoutSummary = {
  guest: "James Wilson",
  room: "112",
  roomCharges: 22500,
  restaurant: 1850,
  laundry: 450,
  miniBar: 850,
  extraBed: 0,
  tax: 4329,
  discount: 500,
  advancePaid: 15000,
  pending: 15479,
};

export const payments = [
  { id: "PAY-001", date: "23 Jun 2026", guest: "James Wilson", roomNo: "112", mode: "UPI", amount: 5000, reference: "UPI-99123", type: "Advance" },
  { id: "PAY-002", date: "23 Jun 2026", guest: "Michael Chen", roomNo: "105", mode: "Card", amount: 5000, reference: "TXN-88234", type: "Partial" },
  { id: "PAY-003", date: "22 Jun 2026", guest: "P. Nair", roomNo: "301", mode: "Cash", amount: 12000, reference: "—", type: "Advance" },
  { id: "PAY-004", date: "21 Jun 2026", guest: "Sarah Johnson", roomNo: "201", mode: "Bank", amount: 18500, reference: "NEFT-4421", type: "Full" },
  { id: "PAY-005", date: "20 Jun 2026", guest: "Vikram Mehta", roomNo: "—", mode: "Cash", amount: 4500, reference: "—", type: "Refund" },
];

export const postings = [
  { id: "PST-001", date: "23 Jun 2026", roomNo: "105", guest: "Michael Chen", description: "Room Charge", amount: 4500, postedBy: "Front Desk" },
  { id: "PST-002", date: "23 Jun 2026", roomNo: "112", guest: "James Wilson", description: "Mini Bar", amount: 850, postedBy: "Front Desk" },
  { id: "PST-003", date: "23 Jun 2026", roomNo: "201", guest: "S. Reddy", description: "Laundry", amount: 450, postedBy: "Housekeeping" },
];

export const invoices = [
  { id: "INV-9001", guest: "Sarah Johnson", date: "22 Jun 2026", subtotal: 15678, gst: 2822, discount: 0, grandTotal: 18500, payment: "Paid", mode: "Bank" },
  { id: "INV-9002", guest: "Rahul Sharma", date: "17 May 2026", subtotal: 11017, gst: 1983, discount: 500, grandTotal: 12500, payment: "Paid", mode: "Card" },
  { id: "INV-9003", guest: "James Wilson", date: "23 Jun 2026", subtotal: 13084, gst: 2355, discount: 0, grandTotal: 15479, payment: "Pending", mode: "—" },
];

// ─── Operations ─────────────────────────────────────────────────────────────

export const visitors = [
  { id: "VIS-001", visitorName: "Amit Sharma", guestName: "Rahul Sharma", room: "204", timeIn: "10:30", timeOut: "12:00", purpose: "Family Visit" },
  { id: "VIS-002", visitorName: "Courier — BlueDart", guestName: "James Wilson", room: "112", timeIn: "14:15", timeOut: "14:20", purpose: "Package Delivery" },
];

export const wakeUpCalls = [
  { id: "WUC-001", guest: "James Wilson", room: "112", date: "24 Jun 2026", time: "06:30", completed: "Pending" },
  { id: "WUC-002", guest: "P. Nair", room: "301", date: "24 Jun 2026", time: "07:00", completed: "Pending" },
  { id: "WUC-003", guest: "S. Reddy", room: "202", date: "23 Jun 2026", time: "06:00", completed: "Done" },
];

export const luggageRecords = [
  { id: "LUG-001", guest: "Rahul Sharma", bagCount: 2, tokenNo: "L-101", stored: "23 Jun 10:00", returned: "—", status: "Stored" },
  { id: "LUG-002", guest: "Sarah Johnson", bagCount: 3, tokenNo: "L-098", stored: "22 Jun 08:00", returned: "22 Jun 14:30", status: "Returned" },
];

export const lostAndFound = [
  { id: "LF-001", item: "Mobile Charger", guest: "Unknown", foundBy: "HK Staff", room: "203", status: "Stored", returnedDate: "—" },
  { id: "LF-002", item: "Gold Watch", guest: "James Wilson", foundBy: "Front Desk", room: "112", status: "Returned", returnedDate: "22 Jun 2026" },
];

export const hkRequests = [
  { id: "HKR-001", guest: "James Wilson", room: "112", issue: "Extra Towels", status: "Completed", assignedStaff: "Meena Devi" },
  { id: "HKR-002", guest: "P. Nair", room: "301", issue: "Room Cleaning", status: "In Progress", assignedStaff: "Lakshmi Bai" },
  { id: "HKR-003", guest: "S. Reddy", room: "202", issue: "Pillow Change", status: "Pending", assignedStaff: "—" },
];

export const maintRequests = [
  { id: "MNT-001", room: "302", problem: "AC Not Working", priority: "High", engineer: "Ravi Kumar", status: "In Progress" },
  { id: "MNT-002", room: "105", problem: "Leaking Tap", priority: "Medium", engineer: "Suresh Patil", status: "Pending" },
];

export const guestFeedback = [
  { id: "FB-001", guest: "Sarah Johnson", rating: 9, cleanliness: 9, food: 8, service: 9, comments: "Excellent stay, will return.", date: "22 Jun 2026" },
  { id: "FB-002", guest: "Rahul Sharma", rating: 8, cleanliness: 8, food: 7, service: 8, comments: "Good experience overall.", date: "17 May 2026" },
];

export const taxiBookings = [
  { id: "TAX-001", guest: "James Wilson", pickup: "Hotel Lobby", drop: "Airport T2", driver: "Rajesh", vehicle: "MH-12-AB-1234", fare: 850, status: "Scheduled" },
  { id: "TAX-002", guest: "P. Nair", pickup: "Hotel Lobby", drop: "Railway Station", driver: "Vikram", vehicle: "MH-12-CD-5678", fare: 450, status: "Completed" },
];

export const messages = [
  { id: "MSG-001", type: "Guest Message", from: "Rahul Sharma", subject: "Late Check-in", message: "Arriving by 11 PM", read: false, date: "23 Jun 2026" },
  { id: "MSG-002", type: "Internal Note", from: "Front Desk", subject: "VIP Guest", message: "Priya Patel — Suite 501, anniversary setup", read: true, date: "23 Jun 2026" },
];

export const posOrders = [
  { id: "POS-001", table: "T-02", guest: "James Wilson (Room 112)", items: 4, subtotal: 1850, discount: 0, gst: 333, total: 2183, status: "Open" },
  { id: "POS-002", table: "Walk-in", guest: "Walk-in Customer", items: 2, subtotal: 680, discount: 50, gst: 113, total: 743, status: "Paid" },
];

// Reservation form field groups
export const reservationFormSections = {
  guestDetails: ["First Name", "Last Name", "Gender", "DOB", "Nationality", "Mobile", "Email", "Address", "City", "State", "Country", "ID Proof Type", "ID Number"],
  bookingDetails: ["Check-in Date", "Check-out Date", "Nights", "Adults", "Children", "Room Type", "Room Number", "Rate Plan", "Meal Plan", "Source"],
  payment: ["Advance Paid", "Payment Mode", "Pending Amount"],
  status: ["Booking Status"],
};

export const checkInFormFields = ["Booking ID", "Guest Name", "Room No", "ID Upload", "Deposit Amount", "Key Card Number", "Vehicle Number", "Remarks"];

export const checkInSections = {
  guestVerification: ["First Name", "Last Name", "Mobile", "Email", "Nationality", "ID Proof Type", "ID Number"],
  roomAllocation: ["Room Type", "Room Number", "Floor", "Bed Type", "Adults", "Children", "Check-in Date", "Check-out Date", "Nights"],
  depositAndKey: ["Deposit Amount", "Payment Mode", "Key Card Number", "Advance Balance"],
  additional: ["Vehicle Number", "Special Requests", "Remarks"],
};

export const pendingCheckIns = [
  { id: "BK-1042", guestName: "Rahul Sharma", mobile: "+91 98765 11111", email: "rahul@email.com", nationality: "Indian", idType: "Aadhaar", idNo: "XXXX-1234", roomType: "Deluxe", roomNo: "204", floor: 2, bedType: "King", adults: 2, children: 0, checkIn: "2026-06-23", checkOut: "2026-06-26", nights: 3, advancePaid: 5000, balance: 8500, source: "Walk-in" },
  { id: "BK-1041", guestName: "Priya Patel", mobile: "+91 98765 22222", email: "priya@email.com", nationality: "Indian", idType: "Passport", idNo: "P1234567", roomType: "Suite", roomNo: "501", floor: 5, bedType: "King", adults: 2, children: 1, checkIn: "2026-06-23", checkOut: "2026-06-25", nights: 2, advancePaid: 10000, balance: 0, source: "Corporate" },
  { id: "BK-1039", guestName: "Anita Desai", mobile: "+91 98765 33333", email: "anita@email.com", nationality: "Indian", idType: "Driving License", idNo: "DL-987654", roomType: "Deluxe", roomNo: "", floor: "", bedType: "King", adults: 1, children: 0, checkIn: "2026-06-23", checkOut: "2026-06-24", nights: 1, advancePaid: 0, balance: 5500, source: "Agoda" },
];

export const walkInFormFields = ["Guest Name", "Mobile", "Room Type", "Room", "Adults", "Nights", "Rate", "Payment Mode"];

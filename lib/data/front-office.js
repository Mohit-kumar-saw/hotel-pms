export const roomBookings = [
  { id: "BK-1042", guest: "Rahul Sharma", company: "Walk In", roomType: "Deluxe", roomNo: "204", checkIn: "23 Jun 2026", checkOut: "26 Jun 2026", amount: 15000, status: "Confirmed" },
  { id: "BK-1041", guest: "Priya Patel", company: "TechCorp Ltd", roomType: "Suite", roomNo: "501", checkIn: "23 Jun 2026", checkOut: "25 Jun 2026", amount: 22000, status: "Confirmed" },
  { id: "BK-1040", guest: "James Wilson", company: "Travel Agent", roomType: "Standard", roomNo: "112", checkIn: "22 Jun 2026", checkOut: "27 Jun 2026", amount: 12500, status: "Checked In" },
  { id: "BK-1039", guest: "Anita Desai", company: "Online", roomType: "Deluxe", roomNo: "308", checkIn: "23 Jun 2026", checkOut: "24 Jun 2026", amount: 5500, status: "Confirmed" },
  { id: "BK-1038", guest: "Michael Chen", company: "Corporate", roomType: "Standard", roomNo: "105", checkIn: "24 Jun 2026", checkOut: "28 Jun 2026", amount: 10000, status: "Pending" },
];

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
  { id: "BT-05", name: "Government", description: "Government department bookings", status: "Active" },
];

export const bookingSources = [
  { id: "BS-01", name: "Booking.com", commission: "15%", status: "Active" },
  { id: "BS-02", name: "Agoda", commission: "18%", status: "Active" },
  { id: "BS-03", name: "Airbnb", commission: "12%", status: "Active" },
  { id: "BS-04", name: "MakeMyTrip", commission: "16%", status: "Active" },
  { id: "BS-05", name: "Direct Website", commission: "0%", status: "Active" },
];

export const roomCharges = [
  { id: "RC-01", roomCategory: "Standard", bedType: "Queen", rackRate: 4500, corporateRate: 3800, weekendRate: 5200, status: "Active" },
  { id: "RC-02", roomCategory: "Deluxe", bedType: "King", rackRate: 6500, corporateRate: 5500, weekendRate: 7500, status: "Active" },
  { id: "RC-03", roomCategory: "Suite", bedType: "King", rackRate: 12000, corporateRate: 10000, weekendRate: 14000, status: "Active" },
  { id: "RC-04", roomCategory: "Executive", bedType: "Twin", rackRate: 8500, corporateRate: 7200, weekendRate: 9500, status: "Active" },
];

export const promoCodes = [
  { id: "PR-01", code: "SUMMER26", discount: "20%", validFrom: "01 Jun 2026", validTo: "31 Aug 2026", usageLimit: 100, used: 34, status: "Active" },
  { id: "PR-02", code: "CORP15", discount: "15%", validFrom: "01 Jan 2026", validTo: "31 Dec 2026", usageLimit: 500, used: 128, status: "Active" },
  { id: "PR-03", code: "WEEKEND10", discount: "10%", validFrom: "01 Jun 2026", validTo: "30 Sep 2026", usageLimit: 200, used: 56, status: "Active" },
];

export const guests = [
  { id: "GST-001", name: "Rahul Sharma", phone: "+91 98765 11111", email: "rahul@email.com", nationality: "Indian", idType: "Aadhaar", idNo: "XXXX-XXXX-1234", visits: 5, lastStay: "15 May 2026" },
  { id: "GST-002", name: "Priya Patel", phone: "+91 98765 22222", email: "priya@email.com", nationality: "Indian", idType: "Passport", idNo: "P1234567", visits: 3, lastStay: "10 Apr 2026" },
  { id: "GST-003", name: "James Wilson", phone: "+1 555 123 4567", email: "james@email.com", nationality: "American", idType: "Passport", idNo: "US9876543", visits: 1, lastStay: "22 Jun 2026" },
];

export const todaysArrivals = [
  { id: "BK-1042", guest: "Rahul Sharma", roomType: "Deluxe", roomNo: "204", pax: 2, eta: "14:00", specialMessage: "Late check-in requested", allocation: "Allocated" },
  { id: "BK-1041", guest: "Priya Patel", roomType: "Suite", roomNo: "501", pax: 3, eta: "12:00", specialMessage: "Anniversary — flowers in room", allocation: "Allocated" },
  { id: "BK-1039", guest: "Anita Desai", roomType: "Deluxe", roomNo: "—", pax: 1, eta: "16:00", specialMessage: "—", allocation: "Pending" },
];

export const rooms = [
  { roomNo: "101", floor: 1, category: "Standard", bedType: "Queen", status: "Occupied", guest: "A. Kumar" },
  { roomNo: "102", floor: 1, category: "Standard", bedType: "Twin", status: "Available", guest: "—" },
  { roomNo: "103", floor: 1, category: "Standard", bedType: "Queen", status: "Dirty", guest: "—" },
  { roomNo: "104", floor: 1, category: "Deluxe", bedType: "King", status: "Reserved", guest: "—" },
  { roomNo: "105", floor: 1, category: "Standard", bedType: "Queen", status: "Occupied", guest: "M. Chen" },
  { roomNo: "201", floor: 2, category: "Deluxe", bedType: "King", status: "Available", guest: "—" },
  { roomNo: "202", floor: 2, category: "Deluxe", bedType: "King", status: "Occupied", guest: "S. Reddy" },
  { roomNo: "203", floor: 2, category: "Deluxe", bedType: "Twin", status: "Clean", guest: "—" },
  { roomNo: "204", floor: 2, category: "Deluxe", bedType: "King", status: "Reserved", guest: "R. Sharma" },
  { roomNo: "301", floor: 3, category: "Suite", bedType: "King", status: "Occupied", guest: "P. Nair" },
  { roomNo: "302", floor: 3, category: "Suite", bedType: "King", status: "Maintenance", guest: "—" },
  { roomNo: "501", floor: 5, category: "Suite", bedType: "King", status: "Reserved", guest: "P. Patel" },
];

export const postings = [
  { id: "PST-001", date: "23 Jun 2026", roomNo: "105", guest: "Michael Chen", description: "Room Charge", amount: 4500, postedBy: "Front Desk" },
  { id: "PST-002", date: "23 Jun 2026", roomNo: "112", guest: "James Wilson", description: "Mini Bar", amount: 850, postedBy: "Front Desk" },
  { id: "PST-003", date: "23 Jun 2026", roomNo: "201", guest: "S. Reddy", description: "Laundry", amount: 450, postedBy: "Housekeeping" },
];

export const payments = [
  { id: "PAY-001", date: "23 Jun 2026", roomNo: "105", guest: "Michael Chen", mode: "Card", amount: 5000, reference: "TXN-88234" },
  { id: "PAY-002", date: "23 Jun 2026", roomNo: "112", guest: "James Wilson", mode: "UPI", amount: 15000, reference: "UPI-99123" },
  { id: "PAY-003", date: "22 Jun 2026", roomNo: "301", guest: "P. Nair", mode: "Cash", amount: 12000, reference: "—" },
];

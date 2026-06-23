export const kpiStats = [
  { label: "Total Revenue", value: "$32,800", change: "+12.5%", trend: "up" },
  { label: "New Bookings", value: "135", change: "+8.2%", trend: "up" },
  { label: "Check In", value: "101", change: "-3.1%", trend: "down" },
  { label: "Check Out", value: "29", change: "+5.4%", trend: "up" },
];

export const guestChartData = [
  { day: "Sun", guests: 620 },
  { day: "Mon", guests: 740 },
  { day: "Tue", guests: 680 },
  { day: "Wed", guests: 886 },
  { day: "Thu", guests: 790 },
  { day: "Fri", guests: 920 },
  { day: "Sat", guests: 850 },
];

export const revenueChartData = [
  { month: "Jan", revenue: 22000 },
  { month: "Feb", revenue: 24500 },
  { month: "Mar", revenue: 26800 },
  { month: "Apr", revenue: 25100 },
  { month: "May", revenue: 28900 },
  { month: "Jun", revenue: 31200 },
  { month: "Jul", revenue: 29800 },
  { month: "Aug", revenue: 32800 },
];

export const bookingsChartData = [
  { month: "Jan", booked: 120, canceled: 12 },
  { month: "Feb", booked: 135, canceled: 8 },
  { month: "Mar", booked: 148, canceled: 15 },
  { month: "Apr", booked: 130, canceled: 10 },
  { month: "May", booked: 155, canceled: 9 },
  { month: "Jun", booked: 162, canceled: 11 },
  { month: "Jul", booked: 170, canceled: 14 },
  { month: "Aug", booked: 185, canceled: 7 },
  { month: "Sep", booked: 175, canceled: 13 },
  { month: "Oct", booked: 190, canceled: 10 },
  { month: "Nov", booked: 200, canceled: 16 },
  { month: "Dec", booked: 210, canceled: 12 },
];

export const platformData = [
  { name: "Booking.com", value: 35, color: "#3B82F6" },
  { name: "Agoda", value: 22, color: "#10B981" },
  { name: "Airbnb", value: 18, color: "#F59E0B" },
  { name: "Walk In", value: 15, color: "#8B5CF6" },
  { name: "Corporate", value: 10, color: "#EF4444" },
];

export const recentBookings = [
  { id: "BK-1042", guest: "Rahul Sharma", roomType: "Deluxe", roomNo: "204", duration: "3 nights", checkIn: "23 Jun 2026", checkOut: "26 Jun 2026", status: "Confirmed" },
  { id: "BK-1041", guest: "Priya Patel", roomType: "Suite", roomNo: "501", duration: "2 nights", checkIn: "23 Jun 2026", checkOut: "25 Jun 2026", status: "Confirmed" },
  { id: "BK-1040", guest: "James Wilson", roomType: "Standard", roomNo: "112", duration: "5 nights", checkIn: "22 Jun 2026", checkOut: "27 Jun 2026", status: "Checked In" },
  { id: "BK-1039", guest: "Anita Desai", roomType: "Deluxe", roomNo: "308", duration: "1 night", checkIn: "23 Jun 2026", checkOut: "24 Jun 2026", status: "Confirmed" },
  { id: "BK-1038", guest: "Michael Chen", roomType: "Standard", roomNo: "105", duration: "4 nights", checkIn: "24 Jun 2026", checkOut: "28 Jun 2026", status: "Pending" },
];

export const roomOccupancy = {
  total: 256,
  occupied: 142,
  available: 68,
  reserved: 32,
  notReady: 14,
};

export const ratings = {
  overall: 8.9,
  categories: [
    { name: "Cleanliness", score: 9.2 },
    { name: "Facilities", score: 8.5 },
    { name: "Location", score: 9.0 },
    { name: "Service", score: 8.8 },
    { name: "Value", score: 8.4 },
  ],
};

export const recentActivity = [
  { time: "10 min ago", text: "New booking confirmed for Room 204", type: "booking" },
  { time: "25 min ago", text: "Payment received from BK-1038", type: "payment" },
  { time: "1 hr ago", text: "Guest checked in — Room 112", type: "checkin" },
  { time: "2 hrs ago", text: "Corporate account registered — TechCorp Ltd", type: "registration" },
  { time: "3 hrs ago", text: "Room 308 marked as Clean", type: "housekeeping" },
];

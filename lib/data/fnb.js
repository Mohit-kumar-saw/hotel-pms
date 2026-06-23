export const restaurantTables = [
  { tableNo: "T-01", waiter: "Amit", guestType: "Walk In", items: 4, amount: 2850, status: "Occupied", kot: "KOT-101" },
  { tableNo: "T-02", waiter: "Suresh", guestType: "In-House", items: 6, amount: 4200, status: "Occupied", kot: "KOT-102" },
  { tableNo: "T-03", waiter: "—", guestType: "—", items: 0, amount: 0, status: "Available", kot: "—" },
  { tableNo: "T-04", waiter: "Ravi", guestType: "Corporate", items: 8, amount: 6500, status: "Bill Printed", kot: "KOT-103" },
  { tableNo: "T-05", waiter: "—", guestType: "—", items: 0, amount: 0, status: "Available", kot: "—" },
];

export const conferenceBookings = [
  { id: "CONF-01", client: "TechCorp Ltd", event: "Annual Meeting", date: "25 Jun 2026", pax: 50, hall: "Conference Room #1", status: "Confirmed", amount: 75000 },
  { id: "CONF-02", client: "Infosys Events", event: "Product Launch", date: "28 Jun 2026", pax: 120, hall: "Lawn", status: "Confirmed", amount: 150000 },
  { id: "CONF-03", client: "Wedding Planners Co", event: "Reception", date: "30 Jun 2026", pax: 200, hall: "Conference Room #2", status: "Pending", amount: 200000 },
];

export const foodCategories = [
  { id: "FC-01", name: "Starters", subCategory: "Indian", parentCategory: "—", items: 12, status: "Active" },
  { id: "FC-02", name: "Main Course", subCategory: "Continental", parentCategory: "—", items: 18, status: "Active" },
  { id: "FC-03", name: "Desserts", subCategory: "Italian", parentCategory: "—", items: 8, status: "Active" },
  { id: "FC-04", name: "Beverages", subCategory: "Hot", parentCategory: "Drinks", items: 15, status: "Active" },
];

export const foodItems = [
  { id: "FI-01", name: "Butter Chicken", category: "Main Course", price: 450, kitchen: "Indian Kitchen", status: "Active" },
  { id: "FI-02", name: "Grilled Salmon", category: "Main Course", price: 850, kitchen: "Continental Kitchen", status: "Active" },
  { id: "FI-03", name: "Margherita Pizza", category: "Main Course", price: 550, kitchen: "Italian Kitchen", status: "Active" },
  { id: "FI-04", name: "Paneer Tikka", category: "Starters", price: 320, kitchen: "Indian Kitchen", status: "Active" },
];

export const barItems = [
  { id: "BI-01", name: "Kingfisher Premium", category: "Beer", price: 350, stock: 48, status: "Active" },
  { id: "BI-02", name: "Johnnie Walker Black", category: "Whisky", price: 550, stock: 12, status: "Active" },
  { id: "BI-03", name: "Mojito", category: "Cocktail", price: 450, stock: 0, status: "Active" },
];

export const inventory = [
  { id: "INV-01", item: "Basmati Rice", category: "Grains", unit: "Kg", stock: 150, parLevel: 100, status: "OK" },
  { id: "INV-02", item: "Chicken Breast", category: "Meat", unit: "Kg", stock: 25, parLevel: 30, status: "Low" },
  { id: "INV-03", item: "Olive Oil", category: "Oil", unit: "Ltr", stock: 8, parLevel: 10, status: "Low" },
  { id: "INV-04", item: "Tomatoes", category: "Vegetables", unit: "Kg", stock: 45, parLevel: 20, status: "OK" },
];

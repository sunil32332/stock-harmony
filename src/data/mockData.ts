export interface Product {
  id: string;
  name: string;
  sku: string;
  category: string;
  supplier: string;
  price: number;
  quantity: number;
  reorderLevel: number;
  status: "In Stock" | "Low Stock" | "Out of Stock";
}

export interface Transaction {
  id: string;
  productName: string;
  type: "IN" | "OUT";
  quantity: number;
  date: string;
  performedBy: string;
}

export interface Supplier {
  id: string;
  name: string;
  contactPerson: string;
  phone: string;
  email: string;
  address: string;
  productsCount: number;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  productsCount: number;
}

export interface Notification {
  id: string;
  message: string;
  type: "warning" | "info" | "danger";
  read: boolean;
  date: string;
}

export const products: Product[] = [
  { id: "1", name: "MacBook Pro 16\"", sku: "MBP-16-2024", category: "Electronics", supplier: "Apple Inc.", price: 2499, quantity: 12, reorderLevel: 5, status: "In Stock" },
  { id: "2", name: "Dell UltraSharp 27\" Monitor", sku: "DU-27-4K", category: "Electronics", supplier: "Dell Technologies", price: 599, quantity: 3, reorderLevel: 10, status: "Low Stock" },
  { id: "3", name: "Ergonomic Office Chair", sku: "EOC-PRO-BK", category: "Furniture", supplier: "Herman Miller", price: 1295, quantity: 25, reorderLevel: 8, status: "In Stock" },
  { id: "4", name: "Wireless Keyboard", sku: "WK-MX-01", category: "Accessories", supplier: "Logitech", price: 99, quantity: 0, reorderLevel: 15, status: "Out of Stock" },
  { id: "5", name: "Standing Desk", sku: "SD-EL-72", category: "Furniture", supplier: "Herman Miller", price: 849, quantity: 7, reorderLevel: 5, status: "In Stock" },
  { id: "6", name: "USB-C Hub", sku: "UCH-7P-01", category: "Accessories", supplier: "Anker", price: 45, quantity: 4, reorderLevel: 20, status: "Low Stock" },
  { id: "7", name: "Noise Cancelling Headphones", sku: "NCH-WH-1K", category: "Electronics", supplier: "Sony Corp.", price: 349, quantity: 18, reorderLevel: 10, status: "In Stock" },
  { id: "8", name: "Webcam 4K", sku: "WC-4K-PRO", category: "Electronics", supplier: "Logitech", price: 199, quantity: 2, reorderLevel: 8, status: "Low Stock" },
  { id: "9", name: "Desk Lamp LED", sku: "DL-LED-01", category: "Accessories", supplier: "BenQ", price: 129, quantity: 30, reorderLevel: 10, status: "In Stock" },
  { id: "10", name: "Laptop Backpack", sku: "LBP-PRO-17", category: "Accessories", supplier: "Peak Design", price: 179, quantity: 15, reorderLevel: 5, status: "In Stock" },
];

export const transactions: Transaction[] = [
  { id: "1", productName: "MacBook Pro 16\"", type: "IN", quantity: 10, date: "2026-03-08", performedBy: "John Smith" },
  { id: "2", productName: "Dell UltraSharp 27\"", type: "OUT", quantity: 5, date: "2026-03-07", performedBy: "Jane Doe" },
  { id: "3", productName: "Ergonomic Office Chair", type: "IN", quantity: 15, date: "2026-03-07", performedBy: "John Smith" },
  { id: "4", productName: "Wireless Keyboard", type: "OUT", quantity: 8, date: "2026-03-06", performedBy: "Mike Johnson" },
  { id: "5", productName: "USB-C Hub", type: "OUT", quantity: 12, date: "2026-03-06", performedBy: "Jane Doe" },
  { id: "6", productName: "Standing Desk", type: "IN", quantity: 5, date: "2026-03-05", performedBy: "John Smith" },
  { id: "7", productName: "Noise Cancelling Headphones", type: "IN", quantity: 20, date: "2026-03-05", performedBy: "Mike Johnson" },
  { id: "8", productName: "Webcam 4K", type: "OUT", quantity: 3, date: "2026-03-04", performedBy: "Jane Doe" },
];

export const suppliers: Supplier[] = [
  { id: "1", name: "Apple Inc.", contactPerson: "Tim Cook", phone: "+1-408-996-1010", email: "supply@apple.com", address: "Cupertino, CA", productsCount: 1 },
  { id: "2", name: "Dell Technologies", contactPerson: "Michael Dell", phone: "+1-800-624-9897", email: "supply@dell.com", address: "Round Rock, TX", productsCount: 1 },
  { id: "3", name: "Herman Miller", contactPerson: "Andrea Owen", phone: "+1-888-443-4357", email: "orders@hermanmiller.com", address: "Zeeland, MI", productsCount: 2 },
  { id: "4", name: "Logitech", contactPerson: "Bracken Darrell", phone: "+41-21-863-5111", email: "supply@logitech.com", address: "Lausanne, Switzerland", productsCount: 2 },
  { id: "5", name: "Sony Corp.", contactPerson: "Kenichiro Yoshida", phone: "+81-3-6748-2111", email: "supply@sony.com", address: "Tokyo, Japan", productsCount: 1 },
  { id: "6", name: "Anker", contactPerson: "Steven Yang", phone: "+86-755-2640-1980", email: "supply@anker.com", address: "Shenzhen, China", productsCount: 1 },
];

export const categories: Category[] = [
  { id: "1", name: "Electronics", description: "Computers, monitors, headphones, and other electronic devices", productsCount: 4 },
  { id: "2", name: "Furniture", description: "Office desks, chairs, and ergonomic furniture", productsCount: 2 },
  { id: "3", name: "Accessories", description: "Peripherals, hubs, bags, and desk accessories", productsCount: 4 },
];

export const notifications: Notification[] = [
  { id: "1", message: "Wireless Keyboard is out of stock!", type: "danger", read: false, date: "2026-03-08" },
  { id: "2", message: "Dell UltraSharp Monitor below reorder level", type: "warning", read: false, date: "2026-03-08" },
  { id: "3", message: "USB-C Hub stock is running low", type: "warning", read: false, date: "2026-03-07" },
  { id: "4", message: "New shipment of MacBook Pro received", type: "info", read: true, date: "2026-03-07" },
  { id: "5", message: "Webcam 4K below reorder level", type: "warning", read: false, date: "2026-03-06" },
];

export const chartData = {
  stockTrends: [
    { month: "Oct", stockIn: 120, stockOut: 85 },
    { month: "Nov", stockIn: 150, stockOut: 110 },
    { month: "Dec", stockIn: 180, stockOut: 160 },
    { month: "Jan", stockIn: 130, stockOut: 95 },
    { month: "Feb", stockIn: 165, stockOut: 120 },
    { month: "Mar", stockIn: 145, stockOut: 100 },
  ],
  topProducts: [
    { name: "MacBook Pro", sales: 45 },
    { name: "Office Chair", sales: 38 },
    { name: "Headphones", sales: 32 },
    { name: "Desk Lamp", sales: 28 },
    { name: "Backpack", sales: 22 },
  ],
  categoryDistribution: [
    { name: "Electronics", value: 4, fill: "hsl(239, 84%, 67%)" },
    { name: "Furniture", value: 2, fill: "hsl(142, 71%, 45%)" },
    { name: "Accessories", value: 4, fill: "hsl(38, 92%, 50%)" },
  ],
};

export const dashboardMetrics = {
  totalProducts: 10,
  totalValue: 128450,
  lowStockItems: 3,
  totalTransactions: 156,
  monthlyRevenue: 45200,
  monthlySales: 89,
};

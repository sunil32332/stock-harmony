import { GlassCard } from "@/components/ui/GlassCard";
import { motion } from "framer-motion";
import { FileText, Download, TrendingUp, Package, Truck, ArrowUpDown } from "lucide-react";

const reportTypes = [
  { title: "Stock Valuation Report", description: "Total inventory value breakdown by category", icon: Package, color: "text-primary" },
  { title: "Sales Summary", description: "Monthly sales performance and trends", icon: TrendingUp, color: "text-accent" },
  { title: "Supplier Purchase Report", description: "Purchase history grouped by supplier", icon: Truck, color: "text-warning" },
  { title: "Stock Movement Report", description: "Daily/monthly stock in and out summary", icon: ArrowUpDown, color: "text-primary" },
  { title: "Low Stock Report", description: "Products below reorder level", icon: FileText, color: "text-destructive" },
  { title: "Transaction History", description: "Complete audit trail of all transactions", icon: FileText, color: "text-muted-foreground" },
];

const Reports = () => {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-2xl font-display font-bold text-foreground">Reports</h1>
        <p className="text-muted-foreground text-sm mt-1">Generate and download inventory reports</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reportTypes.map((report, i) => (
          <GlassCard key={report.title} hover delay={0.1 + i * 0.05}>
            <div className="flex items-start gap-3">
              <div className={`p-3 rounded-xl bg-secondary ${report.color}`}>
                <report.icon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <h3 className="font-display font-semibold text-foreground text-sm">{report.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{report.description}</p>
              </div>
            </div>
            <button className="mt-4 flex items-center gap-2 text-xs font-medium text-primary hover:text-primary/80 transition-colors">
              <Download className="h-3.5 w-3.5" /> Generate Report
            </button>
          </GlassCard>
        ))}
      </div>
    </div>
  );
};

export default Reports;

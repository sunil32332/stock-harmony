import { Package, DollarSign, AlertTriangle, ArrowUpDown, TrendingUp, ShoppingBag } from "lucide-react";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { GlassCard } from "@/components/ui/GlassCard";
import { dashboardMetrics, chartData, transactions, products } from "@/data/mockData";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, PieChart, Pie, Cell } from "recharts";
import { motion } from "framer-motion";

const Dashboard = () => {
  const lowStockProducts = products.filter((p) => p.status === "Low Stock" || p.status === "Out of Stock");

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
        <h1 className="text-2xl font-display font-bold text-foreground">Dashboard</h1>
        <p className="text-muted-foreground text-sm mt-1">Welcome back, John. Here's your inventory overview.</p>
      </motion.div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        <MetricCard title="Total Products" value={dashboardMetrics.totalProducts.toString()} change="+3 this month" changeType="positive" icon={Package} delay={0} />
        <MetricCard title="Total Value" value={`$${dashboardMetrics.totalValue.toLocaleString()}`} change="+12.5%" changeType="positive" icon={DollarSign} iconColor="text-accent" delay={0.05} />
        <MetricCard title="Low Stock" value={dashboardMetrics.lowStockItems.toString()} change="Needs attention" changeType="negative" icon={AlertTriangle} iconColor="text-warning" delay={0.1} />
        <MetricCard title="Transactions" value={dashboardMetrics.totalTransactions.toString()} change="+24 this week" changeType="positive" icon={ArrowUpDown} delay={0.15} />
        <MetricCard title="Monthly Revenue" value={`$${dashboardMetrics.monthlyRevenue.toLocaleString()}`} change="+8.3%" changeType="positive" icon={TrendingUp} iconColor="text-accent" delay={0.2} />
        <MetricCard title="Monthly Sales" value={dashboardMetrics.monthlySales.toString()} change="+15 units" changeType="positive" icon={ShoppingBag} delay={0.25} />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <GlassCard delay={0.3}>
          <h3 className="font-display font-semibold text-foreground mb-4">Stock Movement Trends</h3>
          <ResponsiveContainer width="100%" height={280}>
            <AreaChart data={chartData.stockTrends}>
              <defs>
                <linearGradient id="stockInGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(239, 84%, 67%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(239, 84%, 67%)" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="stockOutGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="hsl(142, 71%, 45%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 33%, 22%)" />
              <XAxis dataKey="month" stroke="hsl(215, 20%, 55%)" fontSize={12} />
              <YAxis stroke="hsl(215, 20%, 55%)" fontSize={12} />
              <Tooltip contentStyle={{ background: "hsl(217, 33%, 17%)", border: "1px solid hsl(217, 33%, 22%)", borderRadius: "8px", color: "hsl(214, 32%, 91%)" }} />
              <Area type="monotone" dataKey="stockIn" stroke="hsl(239, 84%, 67%)" fill="url(#stockInGrad)" strokeWidth={2} name="Stock In" />
              <Area type="monotone" dataKey="stockOut" stroke="hsl(142, 71%, 45%)" fill="url(#stockOutGrad)" strokeWidth={2} name="Stock Out" />
            </AreaChart>
          </ResponsiveContainer>
        </GlassCard>

        <GlassCard delay={0.35}>
          <h3 className="font-display font-semibold text-foreground mb-4">Top Selling Products</h3>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={chartData.topProducts} layout="vertical">
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(217, 33%, 22%)" />
              <XAxis type="number" stroke="hsl(215, 20%, 55%)" fontSize={12} />
              <YAxis dataKey="name" type="category" stroke="hsl(215, 20%, 55%)" fontSize={11} width={100} />
              <Tooltip contentStyle={{ background: "hsl(217, 33%, 17%)", border: "1px solid hsl(217, 33%, 22%)", borderRadius: "8px", color: "hsl(214, 32%, 91%)" }} />
              <Bar dataKey="sales" fill="hsl(239, 84%, 67%)" radius={[0, 6, 6, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Low Stock Alerts */}
        <GlassCard delay={0.4}>
          <h3 className="font-display font-semibold text-foreground mb-4">⚠️ Low Stock Alerts</h3>
          <div className="space-y-3">
            {lowStockProducts.map((product) => (
              <div key={product.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                <div>
                  <p className="text-sm font-medium text-foreground">{product.name}</p>
                  <p className="text-xs text-muted-foreground">{product.sku}</p>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                  product.status === "Out of Stock"
                    ? "bg-destructive/20 text-destructive"
                    : "bg-warning/20 text-warning"
                }`}>
                  {product.quantity} left
                </span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Category Distribution */}
        <GlassCard delay={0.45}>
          <h3 className="font-display font-semibold text-foreground mb-4">Category Distribution</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={chartData.categoryDistribution} cx="50%" cy="50%" innerRadius={55} outerRadius={85} paddingAngle={5} dataKey="value">
                {chartData.categoryDistribution.map((entry, index) => (
                  <Cell key={index} fill={entry.fill} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ background: "hsl(217, 33%, 17%)", border: "1px solid hsl(217, 33%, 22%)", borderRadius: "8px", color: "hsl(214, 32%, 91%)" }} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex justify-center gap-4 mt-2">
            {chartData.categoryDistribution.map((cat) => (
              <div key={cat.name} className="flex items-center gap-2">
                <div className="h-2.5 w-2.5 rounded-full" style={{ background: cat.fill }} />
                <span className="text-xs text-muted-foreground">{cat.name}</span>
              </div>
            ))}
          </div>
        </GlassCard>

        {/* Recent Transactions */}
        <GlassCard delay={0.5}>
          <h3 className="font-display font-semibold text-foreground mb-4">Recent Transactions</h3>
          <div className="space-y-3">
            {transactions.slice(0, 5).map((tx) => (
              <div key={tx.id} className="flex items-center justify-between p-3 rounded-lg bg-secondary/50">
                <div>
                  <p className="text-sm font-medium text-foreground">{tx.productName}</p>
                  <p className="text-xs text-muted-foreground">{tx.date} • {tx.performedBy}</p>
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                  tx.type === "IN"
                    ? "bg-accent/20 text-accent"
                    : "bg-primary/20 text-primary"
                }`}>
                  {tx.type === "IN" ? "+" : "-"}{tx.quantity}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default Dashboard;

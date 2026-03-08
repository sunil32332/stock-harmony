import { GlassCard } from "@/components/ui/GlassCard";
import { transactions } from "@/data/mockData";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const Purchases = () => {
  const purchaseTx = transactions.filter((t) => t.type === "IN");

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-2xl font-display font-bold text-foreground">Purchases</h1>
        <p className="text-muted-foreground text-sm mt-1">Track incoming stock transactions</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <GlassCard hover delay={0.05}>
          <p className="text-sm text-muted-foreground">Total Purchases (Month)</p>
          <p className="text-3xl font-display font-bold text-foreground mt-1">67</p>
          <p className="text-xs text-accent mt-2">+22% from last month</p>
        </GlassCard>
        <GlassCard hover delay={0.1}>
          <p className="text-sm text-muted-foreground">Total Cost</p>
          <p className="text-3xl font-display font-bold text-foreground mt-1">$38,750</p>
          <p className="text-xs text-warning mt-2">+5.1% from last month</p>
        </GlassCard>
        <GlassCard hover delay={0.15}>
          <p className="text-sm text-muted-foreground">Suppliers Active</p>
          <p className="text-3xl font-display font-bold text-foreground mt-1">6</p>
          <p className="text-xs text-muted-foreground mt-2">No change</p>
        </GlassCard>
      </div>

      <GlassCard delay={0.2}>
        <h3 className="font-display font-semibold text-foreground mb-4">Purchase Transactions</h3>
        <div className="space-y-3">
          {purchaseTx.map((tx, i) => (
            <motion.div
              key={tx.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 + i * 0.05 }}
              className="flex items-center justify-between p-4 rounded-lg bg-secondary/50"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/20">
                  <ArrowUpRight className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{tx.productName}</p>
                  <p className="text-xs text-muted-foreground">{tx.date} • {tx.performedBy}</p>
                </div>
              </div>
              <span className="text-sm font-semibold text-accent">+{tx.quantity} units</span>
            </motion.div>
          ))}
        </div>
      </GlassCard>
    </div>
  );
};

export default Purchases;

import { GlassCard } from "@/components/ui/GlassCard";
import { motion } from "framer-motion";
import { User, Lock, Bell, Database } from "lucide-react";

const SettingsPage = () => {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-2xl font-display font-bold text-foreground">Settings</h1>
        <p className="text-muted-foreground text-sm mt-1">Manage your account and system preferences</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GlassCard hover delay={0.1}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-primary/20 text-primary"><User className="h-5 w-5" /></div>
            <h3 className="font-display font-semibold text-foreground">Profile</h3>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-muted-foreground">Full Name</label>
              <input className="w-full mt-1 px-3 py-2 rounded-lg bg-secondary border border-border text-sm text-foreground" defaultValue="John Smith" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Email</label>
              <input className="w-full mt-1 px-3 py-2 rounded-lg bg-secondary border border-border text-sm text-foreground" defaultValue="john@stocksphere.com" />
            </div>
          </div>
        </GlassCard>

        <GlassCard hover delay={0.15}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-warning/20 text-warning"><Lock className="h-5 w-5" /></div>
            <h3 className="font-display font-semibold text-foreground">Security</h3>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-muted-foreground">Current Password</label>
              <input type="password" className="w-full mt-1 px-3 py-2 rounded-lg bg-secondary border border-border text-sm text-foreground" placeholder="••••••••" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">New Password</label>
              <input type="password" className="w-full mt-1 px-3 py-2 rounded-lg bg-secondary border border-border text-sm text-foreground" placeholder="••••••••" />
            </div>
          </div>
        </GlassCard>

        <GlassCard hover delay={0.2}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-accent/20 text-accent"><Bell className="h-5 w-5" /></div>
            <h3 className="font-display font-semibold text-foreground">Notifications</h3>
          </div>
          <div className="space-y-3">
            <label className="flex items-center justify-between">
              <span className="text-sm text-foreground">Low stock alerts</span>
              <div className="h-6 w-11 rounded-full bg-primary relative cursor-pointer">
                <div className="h-5 w-5 rounded-full bg-primary-foreground absolute right-0.5 top-0.5" />
              </div>
            </label>
            <label className="flex items-center justify-between">
              <span className="text-sm text-foreground">Transaction notifications</span>
              <div className="h-6 w-11 rounded-full bg-primary relative cursor-pointer">
                <div className="h-5 w-5 rounded-full bg-primary-foreground absolute right-0.5 top-0.5" />
              </div>
            </label>
          </div>
        </GlassCard>

        <GlassCard hover delay={0.25}>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-xl bg-secondary text-muted-foreground"><Database className="h-5 w-5" /></div>
            <h3 className="font-display font-semibold text-foreground">System</h3>
          </div>
          <div className="space-y-3">
            <div>
              <label className="text-xs text-muted-foreground">Default Reorder Level</label>
              <input type="number" className="w-full mt-1 px-3 py-2 rounded-lg bg-secondary border border-border text-sm text-foreground" defaultValue="10" />
            </div>
            <div>
              <label className="text-xs text-muted-foreground">Currency</label>
              <select className="w-full mt-1 px-3 py-2 rounded-lg bg-secondary border border-border text-sm text-foreground">
                <option>USD ($)</option>
                <option>EUR (€)</option>
                <option>GBP (£)</option>
              </select>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  );
};

export default SettingsPage;

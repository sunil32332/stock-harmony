import { GlassCard } from "@/components/ui/GlassCard";
import { notifications } from "@/data/mockData";
import { motion } from "framer-motion";
import { AlertTriangle, Info, XCircle } from "lucide-react";

const iconMap = {
  warning: AlertTriangle,
  info: Info,
  danger: XCircle,
};

const colorMap = {
  warning: "text-warning bg-warning/20",
  info: "text-primary bg-primary/20",
  danger: "text-destructive bg-destructive/20",
};

const Notifications = () => {
  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <h1 className="text-2xl font-display font-bold text-foreground">Notifications</h1>
        <p className="text-muted-foreground text-sm mt-1">Stay updated on inventory alerts</p>
      </motion.div>

      <div className="space-y-3">
        {notifications.map((notif, i) => {
          const Icon = iconMap[notif.type];
          const colors = colorMap[notif.type];
          return (
            <motion.div
              key={notif.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <GlassCard className={`flex items-center gap-4 ${!notif.read ? "border-l-2 border-l-primary" : ""}`}>
                <div className={`p-2.5 rounded-xl ${colors}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-foreground font-medium">{notif.message}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{notif.date}</p>
                </div>
                {!notif.read && <span className="h-2.5 w-2.5 rounded-full bg-primary glow-primary" />}
              </GlassCard>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Notifications;

import { TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "./card";

export function StatCard({ label, value, change, trend }) {
  const isUp = trend === "up";
  return (
    <Card>
      <p className="text-sm text-muted font-medium">{label}</p>
      <p className="text-2xl font-bold text-foreground mt-1">{value}</p>
      {change && (
        <div className={`flex items-center gap-1 mt-2 text-xs font-medium ${isUp ? "text-green-600" : "text-red-500"}`}>
          {isUp ? <TrendingUp className="h-3.5 w-3.5" /> : <TrendingDown className="h-3.5 w-3.5" />}
          {change}
        </div>
      )}
    </Card>
  );
}

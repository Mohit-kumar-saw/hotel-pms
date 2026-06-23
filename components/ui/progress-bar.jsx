export function ProgressBar({ value, max = 100, color = "bg-primary", className = "" }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  return (
    <div className={`w-full bg-gray-100 rounded-full h-2 ${className}`}>
      <div className={`${color} h-2 rounded-full transition-all`} style={{ width: `${pct}%` }} />
    </div>
  );
}

export function RatingBar({ label, score, max = 10 }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 min-w-0 w-full">
      <span className="text-xs text-muted w-16 sm:w-20 shrink-0 truncate">{label}</span>
      <div className="flex-1 min-w-0">
        <ProgressBar value={score} max={max} color="bg-primary" />
      </div>
      <span className="text-xs font-semibold text-foreground w-7 sm:w-8 text-right shrink-0">{score}</span>
    </div>
  );
}

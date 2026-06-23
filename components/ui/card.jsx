export function Card({ children, className = "", padding = true }) {
  return (
    <div className={`bg-card rounded-xl border border-border shadow-sm min-w-0 ${padding ? "p-4 sm:p-5" : ""} ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ title, subtitle, action }) {
  return (
    <div className="flex items-start justify-between gap-3 mb-4 min-w-0">
      <div className="min-w-0 flex-1">
        {title && <h3 className="text-base font-semibold text-foreground truncate">{title}</h3>}
        {subtitle && <p className="text-sm text-muted mt-0.5 line-clamp-2">{subtitle}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}

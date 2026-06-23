const variants = {
  primary: "bg-primary text-white hover:bg-primary-hover",
  secondary: "bg-white text-foreground border border-border hover:bg-gray-50",
  ghost: "text-muted hover:text-foreground hover:bg-gray-100",
  danger: "bg-red-500 text-white hover:bg-red-600",
};

const sizes = {
  sm: "px-3 py-1.5 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-2.5 text-sm",
};

export function Button({ children, variant = "primary", size = "md", className = "", ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors disabled:opacity-50 ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

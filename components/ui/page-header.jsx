"use client";

import { Button } from "./button";
import { Plus } from "lucide-react";

export function PageHeader({ title, description, actions = [], onAction }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
      <div>
        <h1 className="text-2xl font-bold text-foreground">{title}</h1>
        {description && <p className="text-sm text-muted mt-1 max-w-2xl">{description}</p>}
      </div>
      {actions.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {actions.map((action, i) => (
            <Button
              key={action}
              variant={i === 0 ? "primary" : "secondary"}
              size="md"
              onClick={() => onAction?.(action)}
            >
              {i === 0 && <Plus className="h-4 w-4" />}
              {action}
            </Button>
          ))}
        </div>
      )}
    </div>
  );
}

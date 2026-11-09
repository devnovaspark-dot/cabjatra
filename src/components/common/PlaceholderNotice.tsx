import React from "react";
import { Info } from "lucide-react";

interface PlaceholderNoticeProps {
  label: string;
  field: string;
  className?: string;
}

export const PlaceholderNotice: React.FC<PlaceholderNoticeProps> = ({
  label,
  field,
  className = "",
}) => {
  return (
    <div
      className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs bg-amber-50 text-amber-900 border border-amber-200/80 ${className}`}
      title="This field uses a structured editable placeholder pending official business approval"
    >
      <Info className="w-3.5 h-3.5 text-amber-700 shrink-0" />
      <span className="font-semibold text-amber-950">{label}:</span>
      <span className="font-mono text-[11px] text-amber-800">{field}</span>
    </div>
  );
};


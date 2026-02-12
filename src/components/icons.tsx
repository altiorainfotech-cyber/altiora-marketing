import * as React from "react";

// Use standard SVG props so style/color/etc are allowed
export type IconProps = React.SVGProps<SVGSVGElement>;
export type IconComponent = React.FC<IconProps>;

// Example icon (adjust paths to your actual icon)
export const SafeIcon: IconComponent = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" {...props}>
    {/* ...paths */}
  </svg>
);

// If you export a map of icons:
export const Icons: Record<string, IconComponent> = {
  safe: SafeIcon,
  // ...
};

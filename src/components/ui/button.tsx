 // If you don't have this, just remove it
import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, asChild = false, ...props }, ref) => {
    const Comp = asChild ? "a" : "button";
    return (
      <Comp
        ref={ref}
        className={`px-4 py-2 rounded-md bg-sky-600 text-white hover:bg-sky-700 transition ${className}`}
        {...props}
      >
        {children}
      </Comp>
    );
  }
);
Button.displayName = "Button";

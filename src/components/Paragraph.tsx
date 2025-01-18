import React, { ReactElement, ReactNode } from "react";
import "../typography.css";
import "./Paragraph.css";

// Types
interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: ReactNode;
}

type Paragraph = ReactElement<ParagraphProps>;

// Component
const Paragraph = React.forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ children, ...props }, ref) => {
    return (
      <p className="p" ref={ref} {...props}>
        {children}
      </p>
    );
  }
);
Paragraph.displayName = "Paragraph";

export { Paragraph };

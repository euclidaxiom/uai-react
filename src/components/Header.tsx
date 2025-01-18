import React, { ReactElement } from "react";
import "../typography.css";
import "./Header.css";

// Types
interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: "1" | "2" | "3" | "4" | "5" | "6";
  children: string;
}

type Header = ReactElement<HeaderProps>;

// Component
const Header = React.forwardRef<HTMLHeadingElement, HeaderProps>(
  ({ level, children, ...props }, ref) => {
    const className = `h${level}`;

    return React.createElement(
      `h${level}`,
      {
        className,
        ref,
        ...props,
      },
      children
    );
  }
);
Header.displayName = "Header";

export { Header };

import React, { ReactElement, ReactNode } from "react";
import "../typography.css";
import "./List.css";

// Types
interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement> {
  children: ReactNode;
}
type ListItem = ReactElement<ListItemProps>;

interface DashedListProps extends React.HTMLAttributes<HTMLUListElement> {
  children: ListItem | ListItem[];
}
type DashedList = ReactElement<DashedListProps>;

interface NumberedListProps extends React.HTMLAttributes<HTMLOListElement> {
  children: ListItem | ListItem[];
}
type NumberedList = ReactElement<NumberedListProps>;

// Sub components
const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(
  ({ children, ...props }, ref) => {
    return (
      <li className="p li" ref={ref} {...props}>
        {children}
      </li>
    );
  }
);
ListItem.displayName = "List Item";

// Components
const DashedList = React.forwardRef<HTMLUListElement, DashedListProps>(
  ({ children, ...props }, ref) => {
    return (
      <ul className="ul" ref={ref} {...props}>
        {children}
      </ul>
    );
  }
);
DashedList.displayName = "Dashed List";

const NumberedList = React.forwardRef<HTMLOListElement, NumberedListProps>(
  ({ children, ...props }, ref) => {
    return (
      <ol className="ol" ref={ref} {...props}>
        {children}
      </ol>
    );
  }
);
NumberedList.displayName = "Numbered List";

export { ListItem, DashedList, NumberedList };

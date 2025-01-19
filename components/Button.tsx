import React, {
  ReactElement,
  Children,
  isValidElement,
  createContext,
  useContext,
} from "react";
import "./Button.css";

// Types
interface LabelIconProps {
  children: React.ReactNode;
}
type LabelIcon = ReactElement<LabelIconProps>;

interface LabelTextProps {
  children: React.ReactNode;
}
type LabelText = ReactElement<LabelTextProps>;

interface TrailingIconProps {
  children: React.ReactNode;
}
type TrailingIcon = ReactElement<TrailingIconProps>;

type ButtonChildren =
  | LabelIcon
  | LabelText
  | [LabelIcon, LabelText]
  | [LabelIcon, TrailingIcon]
  | [LabelText, TrailingIcon]
  | [LabelIcon, LabelText, TrailingIcon];

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: String;
  children: ButtonChildren;
}

// Sub components
const LabelIcon = ({ children }: LabelIconProps) => {
  return (
    <div className="label-icon">
      <span className="material-symbols-sharp">{children}</span>
    </div>
  );
};

const LabelText = ({ children }: LabelTextProps) => {
  const { hasLabelIcon } = useContext(ButtonContext);
  return (
    <div
      className={hasLabelIcon ? "label-text" : "label-text label-text--solo"}
    >
      {children}
    </div>
  );
};

const TrailingIcon = ({ children }: LabelTextProps) => {
  return (
    <div className="trailing-icon">
      <span className="material-symbols-sharp">{children}</span>
    </div>
  );
};

// Button Component
const ButtonContext = createContext({ hasLabelIcon: false });

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ size, children, ...props }, ref) => {
    const childrenArray = Children.toArray(children);

    const isLabelIcon = (element: ReactElement): element is LabelIcon => {
      return element.type === LabelIcon;
    };

    const isLabelText = (element: ReactElement): element is LabelText => {
      return element.type === LabelText;
    };

    const isTrailingIcon = (element: ReactElement): element is TrailingIcon => {
      return element.type === TrailingIcon;
    };

    const labelIcon = childrenArray.find(
      (child) => isValidElement(child) && isLabelIcon(child)
    ) as LabelIcon | undefined;

    const labelText = childrenArray.find(
      (child) => isValidElement(child) && isLabelText(child)
    ) as LabelText | undefined;

    const trailingIcon = childrenArray.find(
      (child) => isValidElement(child) && isTrailingIcon(child)
    ) as TrailingIcon | undefined;

    const hasLabelIcon = !!labelIcon;

    return (
      <button ref={ref} {...props}>
        <div className="target-area">
          <ButtonContext.Provider value={{ hasLabelIcon }}>
            <div className={`button button--${size}`}>
              {labelIcon}
              {labelText}
              {trailingIcon}
            </div>
          </ButtonContext.Provider>
        </div>
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, LabelIcon, LabelText, TrailingIcon };

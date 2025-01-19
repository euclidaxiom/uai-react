import React, {
  ReactElement,
  Children,
  createContext,
  useContext,
  forwardRef,
  isValidElement,
} from "react";
import { TargetArea } from "@uai-ui-react/target-area";
import "./Button.css";

//     |\|\
//    /nn /\______
//   (__)\        |\
//        || |--| | \_
//        || |  | |
//  ///////////////////////////////////////////////////////////////////////////

//  BUTTON

interface ButtonContext {
  hasIcon: boolean;
  size: string;
}

const ButtonContext = createContext<ButtonContext>({
  hasIcon: false,
  size: "32",
});

type ButtonChildren =
  | ReactElement<ButtonIcon>
  | ReactElement<ButtonText>
  | [ReactElement<ButtonIcon>, ReactElement<ButtonText>]
  | [ReactElement<ButtonIcon>, ReactElement<ButtonTrailingIcon>]
  | [ReactElement<ButtonText>, ReactElement<ButtonTrailingIcon>]
  | [
      ReactElement<ButtonIcon>,
      ReactElement<ButtonText>,
      ReactElement<ButtonTrailingIcon>
    ];

interface ButtonChildrenComponents {
  icon?: ReactElement<ButtonIcon>;
  text?: ReactElement<ButtonText>;
  trailingIcon?: ReactElement<ButtonTrailingIcon>;
}

function parseButtonChildren(
  children: ButtonChildren
): ButtonChildrenComponents {
  const childrenArray = Children.toArray(children) as ReactElement[];
  const childrenComponents: ButtonChildrenComponents = {};

  childrenArray.forEach((child) => {
    if (isValidElement(child)) {
      if (child.type === ButtonIcon && !childrenComponents.icon) {
        childrenComponents.icon = child as ReactElement<ButtonIcon>;
      } else if (child.type === ButtonText && !childrenComponents.text) {
        childrenComponents.text = child as ReactElement<ButtonText>;
      } else if (
        child.type === ButtonTrailingIcon &&
        !childrenComponents.trailingIcon
      ) {
        childrenComponents.trailingIcon =
          child as ReactElement<ButtonTrailingIcon>;
      }
    }
  });

  return childrenComponents;
}

interface Button extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size: string;
  children: ButtonChildren;
}

const Button = forwardRef<HTMLButtonElement, Button>(
  ({ size, children, ...props }, ref) => {
    const { icon, text, trailingIcon } = parseButtonChildren(children);
    const hasIcon = !icon;

    return (
      <button ref={ref} {...props}>
        <TargetArea>
          <ButtonContext.Provider value={{ hasIcon, size }}>
            <div className={`uai-Button uai-Button--size${size}`}>
              {icon}
              {text}
              {trailingIcon}
            </div>
          </ButtonContext.Provider>
        </TargetArea>
      </button>
    );
  }
);

Button.displayName = "Button";

//  ///////////////////////////////////////////////////////////////////////////

//  BUTTON TEXT

interface ButtonText extends React.HTMLAttributes<HTMLSpanElement> {
  children: string;
}

const ButtonText = forwardRef<HTMLSpanElement, ButtonText>(
  ({ children, className, ...props }, ref) => {
    const { hasIcon } = useContext(ButtonContext);

    return (
      <span
        ref={ref}
        className={`${
          hasIcon ? "uai-Button-text" : "uai-Button-text--with-icon"
        } ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);

ButtonText.displayName = "ButtonText";

//  ///////////////////////////////////////////////////////////////////////////

//  BUTTON ICON

interface ButtonIcon extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

const ButtonIcon = forwardRef<HTMLSpanElement, ButtonIcon>(
  ({ children, className, ...props }, ref) => {
    return (
      <span ref={ref} className={`uai-Button-icon ${className}`} {...props}>
        {children}
      </span>
    );
  }
);

ButtonIcon.displayName = "ButtonIcon";

//  ///////////////////////////////////////////////////////////////////////////

//  BUTTON TRAILING ICON

interface ButtonTrailingIcon extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

const ButtonTrailingIcon = forwardRef<HTMLSpanElement, ButtonTrailingIcon>(
  ({ children, className, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={`uai-Button-icon--trailing ${className}`}
        {...props}
      >
        {children}
      </span>
    );
  }
);

ButtonTrailingIcon.displayName = "ButtonTrailingIcon";

//  ///////////////////////////////////////////////////////////////////////////

export { Button, ButtonIcon, ButtonText, ButtonTrailingIcon };

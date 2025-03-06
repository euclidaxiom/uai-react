import React, {
  ReactElement,
  Children,
  createContext,
  useContext,
  forwardRef,
  isValidElement,
} from "react";

import "./Button.css";

//     |\|\
//    /nn /\______
//   (__)\        |\
//        || |--| | \_
//        || |  | |
//  ///////////////////////////////////////////////////////////////////////////

//  BUTTON

interface ButtonContext {
  size: string;
}

const ButtonContext = createContext<ButtonContext>({
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
  size?: string;
  children: ButtonChildren;
}

const Button = forwardRef<HTMLButtonElement, Button>(
  ({ size, children, ...props }, ref) => {
    const buttonContext = useContext(ButtonContext);
    const buttonSize = buttonContext.size || size || "32";
    const { icon, text, trailingIcon } = parseButtonChildren(children);
    const hasLabel = !!icon || !!text;

    return (
      <button
        className={`uai-Button uai-Button--size${buttonSize}`}
        ref={ref}
        {...props}
      >
        {hasLabel && (
          <div className="label">
            {icon}
            {text}
          </div>
        )}
        {trailingIcon}
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
  ({ children, ...props }, ref) => {
    return (
      <span ref={ref} {...props}>
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
  ({ children, ...props }, ref) => {
    return (
      <span ref={ref} className="uai-Button-icon" {...props}>
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
  ({ children, ...props }, ref) => {
    return (
      <span ref={ref} className="uai-Button-icon--trailing" {...props}>
        {children}
      </span>
    );
  }
);

ButtonTrailingIcon.displayName = "ButtonTrailingIcon";

//  ///////////////////////////////////////////////////////////////////////////

export { Button, ButtonIcon, ButtonText, ButtonTrailingIcon, ButtonContext };

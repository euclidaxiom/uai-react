import React, {
  ReactElement,
  forwardRef,
  createContext,
  ReactNode,
} from "react";

//     |\|\
//    /nn /\______
//   (__)\        |\
//        || |--| | \_
//        || |  | |
//  ///////////////////////////////////////////////////////////////////////////

//  APP CONTEXT

interface AppContext {
  os: "mac" | "ios" | "windows" | "linux" | "android" | undefined;
}

const AppContext = createContext<AppContext>({
  os: undefined,
});

interface AppContextProvider extends React.HTMLAttributes<HTMLDivElement> {
  children: ReactElement;
}

const AppContextProvider = forwardRef<HTMLDivElement, AppContextProvider>(
  ({ children }, ref) => {
    const getOS = () => {
      const userAgent = navigator.userAgent.toLowerCase();

      if (userAgent.includes("mac")) return "mac";
      if (userAgent.includes("iphone") || userAgent.includes("ipad"))
        return "ios";
      if (userAgent.includes("win")) return "windows";
      if (userAgent.includes("linux")) return "linux";
      if (userAgent.includes("android")) return "android";

      return undefined;
    };

    const os = getOS();

    return <AppContext.Provider value={{ os }}>{children}</AppContext.Provider>;
  }
);

AppContextProvider.displayName = "AppContextProvider";

//  ///////////////////////////////////////////////////////////////////////////

//  LAYOUT CONTEXT

interface LayoutContext {
  column: "left" | "center" | "right" | undefined;
}

const LayoutContext = createContext<LayoutContext>({
  column: undefined,
});

//  ///////////////////////////////////////////////////////////////////////////

//  THEME CONTEXT

type DefaultIcons = {
  chevronBack: ReactNode;
  chevronForward: ReactNode;
  leftBar: ReactNode;
};

interface ThemeContext {
  theme: String;
  defaultIcons: DefaultIcons;
}

const ThemeContext = createContext<ThemeContext>({
  theme: "none",
  defaultIcons: {
    chevronBack: <span>●</span>,
    chevronForward: <span>●</span>,
    leftBar: <span>●</span>,
  },
});

//  ///////////////////////////////////////////////////////////////////////////

export {
  AppContext,
  AppContextProvider,
  LayoutContext,
  ThemeContext,
  type DefaultIcons,
};

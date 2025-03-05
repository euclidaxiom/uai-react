import { ReactElement, forwardRef, createContext } from "react";

//     |\|\
//    /nn /\______
//   (__)\        |\
//        || |--| | \_
//        || |  | |
//  ///////////////////////////////////////////////////////////////////////////

//  APP CONTEXT

interface AppContext {
  os: "apple" | "windows" | "linux" | "android" | undefined;
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

      if (
        userAgent.includes("mac") ||
        userAgent.includes("iphone") ||
        userAgent.includes("ipad")
      )
        return "apple";
      if (userAgent.includes("win")) return "windows";
      if (userAgent.includes("linux")) return "linux";
      if (userAgent.includes("android")) return "android";

      return undefined;
    };

    const os = getOS();

    return (
      <AppContext.Provider value={{ os }} ref={ref}>
        {children}
      </AppContext.Provider>
    );
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

export { AppContext, AppContextProvider, LayoutContext };

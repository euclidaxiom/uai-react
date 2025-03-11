import { type DefaultIcons } from "@uai-ui-react/app-context";

import { ChevronLeft, ChevronRight, PanelLeft } from "lucide-react";

const defaultIcons: DefaultIcons = {
  leftBar: <PanelLeft />,
  chevronBack: <ChevronLeft />,
  chevronForward: <ChevronRight />,
};

export { defaultIcons };

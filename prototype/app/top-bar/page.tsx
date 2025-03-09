"use client";

import { Environment } from "@/components/Environment";
import { TopBarPrototype } from "@/components/TopBarPrototype";

export default function Page() {
  return (
    <Environment theme="macos">
      <TopBarPrototype />
    </Environment>
  );
}

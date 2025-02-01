"use client";
import { useEffect } from "react";
import "flowbite";

import { ReactNode } from "react";

export default function FlowbiteProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    import("flowbite").then((module) => module.initFlowbite());
  }, []);

  return <>{children}</>;
}

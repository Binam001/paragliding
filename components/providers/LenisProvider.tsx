"use client";

import { ReactNode } from "react";

interface LenisProviderProps {
  children: ReactNode;
}

export default function LenisProvider({ children }: LenisProviderProps) {
  // Temporarily disabled Lenis to test navigation
  return <>{children}</>;
}

"use client";

import { ThemeProvider } from "next-themes";
import { Provider as BalancerProvider } from "react-wrap-balancer";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class">
      <BalancerProvider>{children}</BalancerProvider>
    </ThemeProvider>
  );
}

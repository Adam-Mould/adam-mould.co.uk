import { Inter } from "next/font/google";
import Providers from "./providers";

import "./globals.css";
import { SiteHeader } from "~/components/site-header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Adam Mould | Freelance Web Developer | Milton Keynes, UK",
    template: "%s | Adam Mould | Freelance Web Developer | Milton Keynes, UK",
  },
  description:
    "Adam Mould is a full stack freelance developer based in Milton Keynes. He specialises in web development, app development, WordPress development and website hosting.",
  authors: [{ name: "Adam Mould" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white font-sans text-base text-slate-900 antialiased transition-colors dark:bg-slate-900 dark:text-slate-300`}
      >
        <Providers>
          <SiteHeader />

          {children}
        </Providers>
      </body>
    </html>
  );
}

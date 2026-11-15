import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TabNews",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header>TabNews</header>
        {children}
      </body>
    </html>
  );
}

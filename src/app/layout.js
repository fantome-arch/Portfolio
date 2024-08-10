import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./Providers";
import { NavProvider } from '../Contexts/NavContext'
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Afnan's Portfolio",
  description: "A portfolio created by React/Next.js",
  content: "width=device-width, initial-scale=1.0"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <NavProvider>
        <body className={inter.className}>
          <Providers>

            {children}

          </Providers>
        </body>
      </NavProvider>

    </html>
  );
}

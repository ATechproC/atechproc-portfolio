import type { Metadata } from "next";
import "./globals.css";
import MobileMenuProvider from "@/providers/MobileMenuProvider";
import LoaderProvider from "@/providers/LoaderProvider";
import ModalProvider from "@/providers/ProjectModalProvider";
import ThemeProvider from "@/providers/ThemeProvider";
import ColorPickerProvider from "@/providers/ColorPickerProvider";

export const metadata: Metadata = {
  title: "A_Techpro_C",
  description: "A_Techpro_C is a front-end developer skilled in React and JavaScript, exploring data engineering to build responsive and data-driven web apps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ColorPickerProvider>
      <ThemeProvider>
        <ModalProvider>
          <MobileMenuProvider>
            <html lang="en" style={{ scrollBehavior: "smooth" }}>
              <body>
                {children}
              </body>
            </html>
          </MobileMenuProvider>
        </ModalProvider>
      </ThemeProvider>
    </ColorPickerProvider>
  );
}

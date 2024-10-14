"use client";
import "bootstrap-icons/font/bootstrap-icons.css";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../styles/globals";
import theme from "../styles/theme";
import "../fonts/fonts.css";
import Header from "../components/layout/header/Header";
import NavBar from "../components/layout/navbar/NavBar";
import { Provider } from "jotai";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
import Page from "./page";
import useMediaHook from "@/hook/MeadiaHook";
import useHeaderHook from "@/hook/HeaderHook";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const isLargeScreen = useMediaHook("(min-width: 769px)");
  const pathname = usePathname() || "";
  const [activePage, setActivePage] = useHeaderHook();
  const handleNavigation = (page: string) => {
    setActivePage(page);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Provider>
        <html lang="en">
          <body>
            {isLargeScreen && (
              <Header
                currentPath={pathname}
                onNavigate={handleNavigation}
                activePage={activePage}
              />
            )}
            <main>
              {pathname === "/" ? (
                <Page
                  currentPath={pathname}
                  onNavigate={handleNavigation}
                  activePage={activePage}
                />
              ) : (
                children
              )}
            </main>
            <NavBar currentPath={pathname} />
          </body>
        </html>
      </Provider>
    </ThemeProvider>
  );
}

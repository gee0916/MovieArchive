"use client";

import React, { useEffect, useState } from "react";
import Header from "@/components/layout/header/Header";
import Home from "@/app/home/Home";
import PhotoCard from "./home/PhotoCard";
import useMediaHook from "@/hook/MeadiaHook";
import Footer from "@/components/layout/footer/Footer";
import styled from "styled-components";
import media from "@/styles/media";
import { PageProps } from "@/types/type";

export default function Page({ currentPath, activePage, onNavigate }: PageProps) {
  const [content, setContent] = useState<JSX.Element | null>(null);
  const isLargeScreen = useMediaHook("(max-width: 768px)");

  useEffect(() => {
    const loadContent = async () => {
      let component = null;
      if (activePage === "home") {
        component = <Home />;
      } else if (activePage === "photo-card") {
        component = <PhotoCard />;
      }
      setContent(component);
    };

    loadContent();
  }, [activePage]);

  return (
    <>
      {isLargeScreen && (
        <Header currentPath={currentPath} onNavigate={onNavigate} activePage={activePage} />
      )}
      <MainInner>{content}</MainInner>
      <Footer />
    </>
  );
}

const MainInner = styled.div`
  ${[media().extraSmall, media().small].map(
    (mediaQuery) => `
    ${mediaQuery`
      {padding-top: 5.5rem;}
    `}
  `,
  )}
`;

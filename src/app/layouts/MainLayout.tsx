'use client'
import NavItem from "@/app/layouts/NavItem";
import HeaderLayout from "@/app/layouts/HeaderLayout";
import SocialMedia from "@/app/layouts/components/SocialMedia";
import MyName from "@/app/layouts/components/MyName";
import AppContainer from "@/app/layouts/components/AppContainer";
import Footer from "@/app/layouts/components/Footer";
import React from "react";

export default function MainLayout(props: { children: React.ReactNode }) {



  return (
    <>
      <AppContainer>
        <HeaderLayout>
          <MyName myName="JnGdt" />
          <NavItem />
          <SocialMedia />
        </HeaderLayout>
        {props.children}
      <Footer />
    </AppContainer>
    </>
  );
}

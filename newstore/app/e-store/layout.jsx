"use client";
import { Layout } from "antd";
import React from "react";
import WebFooter from "../homepage/footer";
import NavBar from "../homepage/navbar";
import { CustProvider } from "./provider";

function ELayout({ children }) {
  return (
    <CustProvider>
    <Layout>
      {children}
    </Layout>
    </CustProvider>
  );
}
 
export default ELayout;

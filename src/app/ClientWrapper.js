"use client";
import { useEffect } from "react";
import ScrollProgress from "../components/common/ScrollProgress";
import useWow from "../hooks/useWow";

export default function ClientWrapper({ children }) {
  useWow();

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <>
      <ScrollProgress />
      {children}
    </>
  );
}

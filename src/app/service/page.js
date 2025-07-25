"use client"
import useWow from "@/hooks/useWow"; 
import ServicePage3 from "./service3/page";
import React from "react";

const ServicePage = () => {
  useWow()
  return (
   <ServicePage3/>
  );
};

export default ServicePage;

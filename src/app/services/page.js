"use client"
import useWow from "../../hooks/useWow"; 
import ServicesPage3 from "./services3/page";
import React from "react";

const ServicePage = () => { 
  
  useWow()
  return (
   <ServicesPage3/>
  );
};

export default ServicePage;

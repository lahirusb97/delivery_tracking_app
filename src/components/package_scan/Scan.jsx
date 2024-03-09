"use client";
import React, { useEffect, useRef, useState } from "react";
import CameraOpen from "./CameraOpen";
import { useSymbologyScanner } from "@use-symbology-scanner/react";
import PackageView from "../PackageView";

export default function Scan() {
  const [package_ID, setPackage_ID] = React.useState("");

  const getPackageID = (id) => {
    setPackage_ID(id);
  };
  const ref = useRef(null);

  const handleSymbol = (symbol, matchedSymbologies) => {
    setPackage_ID(symbol);
  };
  useSymbologyScanner(handleSymbol, { target: ref });

  return (
    <div>
      <div ref={ref}></div>
      <PackageView />
      <CameraOpen getPackageID={getPackageID} />
    </div>
  );
}

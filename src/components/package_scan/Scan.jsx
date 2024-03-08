"use client";
import React, { useEffect, useRef, useState } from "react";
import CameraOpen from "./CameraOpen";

import { useSymbologyScanner } from "@use-symbology-scanner/react";

export default function Scan() {
  const [value, setValue] = useState("");
  const ref = useRef(null);

  const handleSymbol = (symbol, matchedSymbologies) => {
    setValue(symbol);
  };
  useSymbologyScanner(handleSymbol, { target: ref });

  return (
    <div>
      <div ref={ref}>s</div>
      <CameraOpen />
    </div>
  );
}

"use client";

import * as React from "react";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import CorporateTable from "./CorporateTable";
import dayjs from "dayjs";
import CopForm from "./CopForm";
import {
  collectionGroup,
  query,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore";

export default function ManageCoporate() {
  return (
    <div>
      <CopForm />
      <CorporateTable />
    </div>
  );
}

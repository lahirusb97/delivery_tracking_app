"use client";
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Button, TextField, Typography } from "@mui/material";
import CopPayHistoryTable from "./CopPayHistoryTable";

//nested data is ok, see accessorKeys in ColumnDef below
const data = [
  {
    name: {
      firstName: "John",
      lastName: "10000",
    },
    address: "0",
    city: "East Daphne",
    state: "Kentucky",
  },
  {
    name: {
      firstName: "Jane",
      lastName: "25000",
    },
    address: "25000",
    city: "Columbus",
    state: "Ohio",
  },
  {
    name: {
      firstName: "Joe",
      lastName: "4000",
    },
    address: "500",
    city: "South Linda",
    state: "West Virginia",
  },
  {
    name: {
      firstName: "Kevin",
      lastName: "3000",
    },
    address: "0",
    city: "Lincoln",
    state: "Nebraska",
  },
  {
    name: {
      firstName: "Joshua",
      lastName: "50000",
    },
    address: "6000",
    city: "Charleston",
    state: "South Carolina",
  },
  {
    name: {
      firstName: "Joshua",
      lastName: "60000",
    },
    address: "30000",
    city: "Charleston",
    state: "South Carolina",
  },
];

export default function CorporateTable() {
  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: "name.firstName", //access nested data with dot notation
        header: "Name",
        size: 150,
      },
      {
        accessorKey: "name.lastName",
        header: "Total Payement",
        size: 150,
      },
      {
        accessorKey: "address", //normal accessorKey
        header: "Balance",
        size: 200,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)

    enableExpandAll: false,
    renderDetailPanel: ({ row }) => (
      <div>
        <Typography textAlign={"center"} variant="h6">
          Payment Details
        </Typography>
        <CopPayHistoryTable />
        <div className="flex items-center">
          <TextField sx={{ width: "100%", m: 1 }} label="Payement Amount" />
          <Button variant="contained">Pay</Button>
        </div>
      </div>
    ),
    muiExpandButtonProps: ({ row, table }) => ({
      onClick: () => {
        table.setExpanded({ [row.id]: !row.getIsExpanded() });
        console.log(row.id);
        console.log(row.getIsExpanded());
      }, //only 1 detail panel open at a time
    }),
  });

  return <MaterialReactTable table={table} />;
}

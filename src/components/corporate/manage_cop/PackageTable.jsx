"use client";
import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import {
  Button,
  ListItemIcon,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import CopPayHistoryTable from "./CopPayHistoryTable";
import { Analytics, Edit, Report } from "@mui/icons-material";
import ReportDialog from "./ReportDialog";
import UpdateCop from "./UpdateCop";
import dayjs from "dayjs";
import DetailCard from "@/components/PackageView/DetailCard";

export default function PackageTable({ packageData }) {
  const columns = useMemo(
    () => [
      {
        accessorKey: "package_id", //access nested data with dot notation
        header: "#Package ID",
        size: 50,
      },
      {
        accessorKey: "date", //access nested data with dot notation
        header: "Date",

        Cell: ({ renderedCellValue, row }) => (
          <Typography variant="subtitle1">
            {dayjs(renderedCellValue.toDate()).format("YYYY-MM-DD / hh:mm A")}
          </Typography>
        ),
      },
      {
        accessorKey: "cod",
        header: "Delivery Type",

        Cell: ({ renderedCellValue, row }) => (
          <Typography
            variant="subtitle1"
            fontWeight={600}
            color={renderedCellValue ? "red" : "green"}
          >
            {renderedCellValue ? "COD" : "Cash"}
          </Typography>
        ),
      },
      {
        accessorKey: "rate", //normal accessorKey
        header: "Rate",
        Cell: ({ renderedCellValue, row }) => (
          <Typography>Rs.{renderedCellValue}</Typography>
        ),
      },
      {
        accessorKey: "weight", //normal accessorKey
        header: "Weight",
        Cell: ({ renderedCellValue, row }) => (
          <Typography>{renderedCellValue}Kg</Typography>
        ),
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: packageData, //data must be memoized or stable (useState, useMemo, defined outside of this component, etc.)
    enableExpandAll: false,

    renderDetailPanel: ({ row }) => (
      <div>
        <Typography variant="h6">
          Package ID: {row.getValue("package_id")}
        </Typography>
        <DetailCard
          detail={{
            name: "Lahiru Shiran",
            mobile: "0716320662",
            address: "B125/2, 5th Floor, 1st Road, Colombo",
          }}
          iconColor={"gray"}
          title={"Sender Details"}
        />
      </div>
    ),
    muiExpandButtonProps: ({ row, table }) => ({
      onClick: () => {
        table.setExpanded({ [row.id]: !row.getIsExpanded() });
      }, //only 1 detail panel open at a time
    }),
  });

  return (
    <div>
      <MaterialReactTable table={table} />
    </div>
  );
}

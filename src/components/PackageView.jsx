import {
  LocationOff,
  LocationOn,
  MobileFriendly,
  Person,
} from "@mui/icons-material";
import { Card, CardContent, Paper, Typography } from "@mui/material";
import React from "react";
import DetailCard from "./PackageView/DetailCard";
import PriceDetail from "./PackageView/PriceDetail";
import RiderTrack from "./PackageView/RiderTrack";

export default function PackageView() {
  return (
    <div className="flex md:flex-row flex-col flex-wrap">
      <div className="flex flex-col md:flex-row lg:flex-col">
        <DetailCard
          detail={{
            name: "Lahiru Shiran",
            mobile: "0716320662",
            address: "B125/2, 5th Floor, 1st Road, Colombo",
          }}
          iconColor={"gray"}
          title={"Sender Details"}
        />
        <DetailCard
          detail={{
            name: "Lahiru Shiran",
            mobile: "0716320662",
            address: "B125/2, 5th Floor, 1st Road, Colombo",
          }}
          iconColor={"green"}
          title={"Deliver Details"}
        />
      </div>
      <div>
        <div>
          <Paper className="flex justify-between items-end p-2 my-2">
            <div>
              <Typography variant="body1" color={"GrayText"} fontWeight={600}>
                Delivery Type
              </Typography>
              <Typography fontWeight={600} color={"red"} variant="h6">
                Cash On Delivery
              </Typography>
            </div>
            <Typography fontWeight={600} color={"green"} variant="h5">
              Delivered
            </Typography>
          </Paper>
        </div>
        <PriceDetail />
      </div>
      <div>
        <RiderTrack
          iconColor={"green"}
          detail={{
            name: "Nishan ",
            ariea: "kegalla",
            pickup: "2024/03/12 - 12:00pm",
          }}
        />
        <RiderTrack
          iconColor={"green"}
          detail={{
            name: "Amal",
            ariea: "Rathnapura",
            pickup: "2024/03/12 - 02:00pm",
          }}
        />
        <RiderTrack
          iconColor={"Frank"}
          detail={{
            name: "Frank",
            ariea: "Colombo",
            pickup: "2024/03/12 - 04:00pm",
          }}
        />
      </div>
    </div>
  );
}

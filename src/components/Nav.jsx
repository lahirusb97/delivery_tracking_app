"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { redirect, usePathname, useRouter } from "next/navigation";
import { closeNav, openNavBar } from "@/redux/Slice/navBarSlice";
import { Divider, IconButton, Typography } from "@mui/material";

import { auth, firestore } from "@/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { openScackbar } from "@/redux/Slice/snackBarSlice";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";

import { MdClose, MdLogout, MdOutlineQrCodeScanner } from "react-icons/md";
import { LuPackagePlus } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
export default function Nav() {
  const [user, loading, error] = useAuthState(auth);
  if (!loading && !user) {
    redirect("/login");
  }
  const dispatch = useDispatch();
  const router = useRouter();
  const OPEN = useSelector((state) => state.nav_bar.OPEN);

  const toggleDrawer = () => {
    dispatch(openNavBar());
  };
  const [value, loadingData, errorData] = useCollection(
    collection(firestore, "vehicles"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  const navLinkNormal = [
    {
      name: "Package Scan",
      navIcon: <MdOutlineQrCodeScanner />,
      navPath: "/arm/package_scan",
    },

    {
      name: "Add Package",
      navIcon: <LuPackagePlus />,
      navPath: "/arm/normal_package",
    },
  ];

  React.useEffect(() => {
    if (errorData) {
      dispatch(
        openScackbar({
          open: true,
          type: "error",
          msg: "Vehicle data loading Error " + errorData.message,
        })
      );
    }
    if (!loadingData && value) {
      const vehiclesData = value.docs.map((doc) => ({
        car_id: doc.id,
        ...doc.data(),
      }));
      // dispatch(setVehicle({ loading: false, vehicles: vehiclesData }));
    }
  }, [loadingData, value, dispatch, errorData]);

  const pathname = usePathname();

  return (
    <div>
      <IconButton color="primary" onClick={toggleDrawer}>
        <GiHamburgerMenu size={24} />
      </IconButton>
      <React.Fragment>
        <Drawer anchor={"left"} open={OPEN} onClose={toggleDrawer}>
          <Box
            role="presentation"
            onClick={toggleDrawer}
            onKeyDown={toggleDrawer}
            width={250}
          >
            <div className="flex justify-end">
              <IconButton color="primary" onClick={() => closeNav()}>
                <MdClose />
              </IconButton>
            </div>
            <List>
              <ListItem>
                <Typography variant="subtitle1">Manage Package</Typography>
              </ListItem>
              {navLinkNormal.map((e, index) => (
                <ListItem color="primary" key={e.name} disablePadding>
                  <Link href={e.navPath}>
                    <ListItemButton
                      sx={{
                        width: 250,
                        backgroundColor: pathname === e.navPath && "black",
                        color: pathname === e.navPath && "white",
                        "&:hover": {
                          backgroundColor: pathname === e.navPath && "black", // Set to 'none' or any other value to prevent hover effect
                        },
                      }}
                    >
                      <ListItemIcon
                        sx={{
                          color: pathname === e.navPath && "white",
                        }}
                      >
                        {e["navIcon"]}
                      </ListItemIcon>
                      <ListItemText primary={e["name"]} />
                    </ListItemButton>
                  </Link>
                </ListItem>
              ))}
            </List>
            <Divider />
            <List>
              <ListItem
                onClick={async () => {
                  auth
                    .signOut(auth)
                    .then(() => {
                      dispatch(
                        openScackbar({
                          open: true,
                          type: "success",
                          msg: "Logout success",
                        })
                      );
                    })
                    .catch((error) => {
                      // An error happened.
                      console.log(error);
                    });
                }}
                disablePadding
              >
                <ListItemButton>
                  <ListItemIcon>
                    <MdLogout />
                  </ListItemIcon>
                  <ListItemText primary={"Sing out"} />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </React.Fragment>
    </div>
  );
}

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
import {
  useCollection,
  useDocument,
  useDocumentData,
} from "react-firebase-hooks/firestore";
import { collection, doc, getFirestore, onSnapshot } from "firebase/firestore";

import { MdClose, MdLogout, MdOutlineQrCodeScanner } from "react-icons/md";
import { LuPackagePlus } from "react-icons/lu";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaRegistered } from "react-icons/fa6";
import {
  AdminPanelSettings,
  AppRegistrationTwoTone,
  PersonAdd,
} from "@mui/icons-material";
import { setRootData, setUserData } from "@/redux/Slice/rootDataSlice";
export default function Nav() {
  const [user, loading, error] = useAuthState(auth);
  const [loadingData, setLoadingData] = React.useState(true);
  const [value, setvalue] = React.useState(null);
  if (!loading && !user) {
    redirect("/login");
  }
  const dispatch = useDispatch();
  const router = useRouter();
  const OPEN = useSelector((state) => state.nav_bar.OPEN);
  const toggleDrawer = () => {
    dispatch(openNavBar());
  };

  React.useEffect(() => {
    const unsub = onSnapshot(doc(getFirestore(), "data", "coporate"), (doc) => {
      const arrayData = Object.keys(doc.data().coporate).map((key) => {
        const cop_id = key; // Get the ID
        const data = doc.data().coporate[key]; // Get the data
        return { cop_id, ...data };
      });
      console.log(arrayData);

      dispatch(
        setRootData({
          DATA: arrayData,
          loading: false,
          DATAObj: doc.data().coporate,
        })
      );
    });
  });
  const navLinkNormal = [
    {
      name: "Package Scan",
      navIcon: <MdOutlineQrCodeScanner />,
      navPath: "/arm/package_scan",
      access: ["admin", "branch", "rider"],
    },
    {
      name: "Add Package",
      navIcon: <LuPackagePlus />,
      navPath: "/arm/normal_package",
      access: ["admin", "branch"],
    },
  ];
  const navLinkcoporate = [
    {
      name: "Add Package",
      navIcon: <LuPackagePlus />,
      navPath: "/arm/add_package",
      access: ["admin", "branch"],
    },
    {
      name: "Manage Coporate",
      navIcon: <AppRegistrationTwoTone />,
      navPath: "/arm/manage_company",
      access: ["admin", "branch"],
    },
  ];
  const navmanage = [
    {
      name: "Manage Employee",
      navIcon: <AdminPanelSettings />,
      navPath: "/arm/employee_manage",
      access: ["admin"],
    },
  ];

  React.useEffect(() => {
    if (error) {
      dispatch(
        openScackbar({
          open: true,
          type: "error",
          msg: "user data loading Error " + error.message,
        })
      );
    }
    if (!loading && user) {
      setLoadingData(true);
      const unsub = onSnapshot(doc(getFirestore(), "user", user.uid), (doc) => {
        setvalue(doc.data());
        dispatch(setUserData({ ...doc.data(), id: doc.id }));
        setLoadingData(false);
      });
    }
  }, [user]);

  const pathname = usePathname();

  if (value?.job_role !== "admin") {
    if (pathname === "/arm/employee_manage") {
      redirect("/arm/package_scan");
    }
  }
  if (value?.job_role !== "branch" && value?.job_role !== "admin") {
    if (
      pathname === "/arm/normal_package" ||
      pathname === "/arm/add_package" ||
      pathname === "/arm/manage_company"
    ) {
      redirect("/arm/package_scan");
    }
  }

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
              <Typography sx={{ mx: 1 }} variant="subtitle1">
                Manage Package
              </Typography>
              {navLinkNormal.map(
                (e, index) =>
                  e.access.includes(value?.job_role) && (
                    <ListItem color="primary" key={e.name} disablePadding>
                      <Link href={e.navPath}>
                        <ListItemButton
                          sx={{
                            width: 250,
                            backgroundColor: pathname === e.navPath && "black",
                            color: pathname === e.navPath && "white",
                            "&:hover": {
                              backgroundColor:
                                pathname === e.navPath && "black", // Set to 'none' or any other value to prevent hover effect
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
                  )
              )}
              <Divider />

              {value?.job_role !== "rider" ? (
                <Typography sx={{ mx: 1 }} variant="subtitle1">
                  Corporate
                </Typography>
              ) : (
                <></>
              )}
              {navLinkcoporate.map(
                (e, index) =>
                  e.access.includes(value?.job_role) && (
                    <ListItem color="primary" key={e.name} disablePadding>
                      <Link href={e.navPath}>
                        <ListItemButton
                          sx={{
                            width: 250,
                            backgroundColor: pathname === e.navPath && "black",
                            color: pathname === e.navPath && "white",
                            "&:hover": {
                              backgroundColor:
                                pathname === e.navPath && "black", // Set to 'none' or any other value to prevent hover effect
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
                  )
              )}
              <Divider />

              {value?.job_role === "admin" ? (
                <Typography sx={{ mx: 1 }} variant="subtitle1">
                  Manage ARM Air
                </Typography>
              ) : (
                <></>
              )}

              {navmanage.map(
                (e, index) =>
                  e.access.includes(value?.job_role) && (
                    <ListItem color="primary" key={e.name} disablePadding>
                      <Link href={e.navPath}>
                        <ListItemButton
                          sx={{
                            width: 250,
                            backgroundColor: pathname === e.navPath && "black",
                            color: pathname === e.navPath && "white",
                            "&:hover": {
                              backgroundColor:
                                pathname === e.navPath && "black", // Set to 'none' or any other value to prevent hover effect
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
                  )
              )}
            </List>
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

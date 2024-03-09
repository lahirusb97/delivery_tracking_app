"use client";
import React, { useEffect, useRef, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  CardHeader,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
  InputLabel,
  MenuItem,
  Paper,
  Radio,
  RadioGroup,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import BoxInter from "../normal_package/BoxInter";

export default function AddCorPackage() {
  const [selectRate, setSelectRate] = useState("");
  const [deliType, setDeliType] = useState("dom");
  const [selectCop, setselectCop] = useState(120);
  const isMounted = useRef(true);

  const schema = yup.object({
    s_name: yup.string().required("Enter Sender name"),
    s_address: yup.string().required("Enter Sender Address"),
    s_mobile: yup.string().required("Enter Sender Mobile Number"),
    r_name: yup.string().required("Enter Reciver name"),
    r_address: yup.string().required("Enter Reciver Address"),
    r_mobile: yup.string().required("Enter Reciver Mobile Number"),
    rate: yup.number().positive().required("Enter Delivery Rate").moreThan(0),
    package_price: yup
      .number()
      .required("Enter COD Package Price")
      .moreThan(-1)
      .default(0),
    weight: yup.number().positive().required("Enter Package Weight"),
    rate_cod: yup.bool(),
    country:
      deliType === "dom"
        ? yup.string()
        : yup.string().required("Enter Country"),
    city:
      deliType === "dom" ? yup.string() : yup.string().required("Enter City"),
    tracking_id:
      deliType === "dom"
        ? yup.string()
        : yup.string().required("Enter Package Tracking Number"),
    zip_code:
      deliType === "dom"
        ? yup.string()
        : yup.string().required("Enter Zip Code"),
  });
  const {
    register,
    handleSubmit,
    setValue,
    setError,
    reset,
    watch,
    unregister,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const addPackage = (data) => {
    console.log(data);
  };
  useEffect(() => {
    if (deliType === "dom" && !isMounted.current) {
      console.log(isMounted.current);
      unregister(["country", "city", "zip_code", "tracking_id"]);
    }
  }, [unregister, deliType, isMounted.current]);

  return (
    <div>
      <form onSubmit={handleSubmit(addPackage)}>
        <div className="flex justify-center text-center">
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Delivery Type
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
              value={deliType}
              onChange={(e) => {
                setDeliType(e.target.value);
              }}
            >
              <FormControlLabel
                value={"dom"}
                control={<Radio />}
                label="Domestic"
                defaultChecked
              />
              <FormControlLabel
                value={"int"}
                control={<Radio />}
                label="International"
              />
            </RadioGroup>
          </FormControl>
        </div>
        <div className="flex md:flex-row flex-col justify-around p-2 gap-4">
          <Paper className="md:w-input-max " variant="elevation" elevation={2}>
            <Typography
              align="center"
              color={"GrayText"}
              variant="h6"
              fontWeight={600}
              m={1}
            >
              Sender Details
            </Typography>
            <div className="flex flex-col gap-4 m-2">
              <Controller
                name="s_name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Name"
                    fullWidth
                    error={errors.s_name ? true : false}
                    helperText={errors.s_name && errors.s_name.message}
                  />
                )}
              />
              <Controller
                name="s_address"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    defaultValue=""
                    label="Address"
                    fullWidth
                    error={errors.s_address ? true : false}
                    helperText={errors.s_address && errors.s_address.message}
                  />
                )}
              />
              <Controller
                name="s_mobile"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    defaultValue=""
                    label="Mobile"
                    fullWidth
                    error={errors.s_mobile ? true : false}
                    helperText={errors.s_mobile && errors.s_mobile.message}
                  />
                )}
              />
            </div>
          </Paper>
          <Paper
            className="md:w-input-max p-2"
            variant="elevation"
            elevation={2}
          >
            <Typography
              align="center"
              color={"GrayText"}
              variant="h6"
              fontWeight={600}
              m={1}
            >
              Reciver Details
            </Typography>
            <div className="flex flex-col gap-4 ">
              <Controller
                name="r_name"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    defaultValue=""
                    label="Name"
                    fullWidth
                    error={errors.r_name ? true : false}
                    helperText={errors.r_name && errors.r_name.message}
                  />
                )}
              />
              <Controller
                name="r_address"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    defaultValue=""
                    label="Address"
                    fullWidth
                    error={errors.r_address ? true : false}
                    helperText={errors.r_address && errors.r_address.message}
                  />
                )}
              />
              <Controller
                name="r_mobile"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    defaultValue=""
                    label="Mobile"
                    fullWidth
                    error={errors.r_mobile ? true : false}
                    helperText={errors.r_mobile && errors.r_mobile.message}
                  />
                )}
              />

              <div className="flex flex-col gap-4">
                {deliType === "int" ? (
                  <div ref={isMounted}>
                    <BoxInter control={control} errors={errors} />
                  </div>
                ) : (
                  <></>
                )}
              </div>
            </div>
          </Paper>
        </div>
        <Paper className="p-2 m-4 " variant="elevation" elevation={2}>
          <Typography
            align="center"
            color={"GrayText"}
            variant="h6"
            fontWeight={600}
            m={1}
          >
            Package Details
          </Typography>
          <div className="w-screen md:w-input-max m-auto my-2"></div>
          <div className="grid md:grid-cols-2 md:grid-rows-2 gap-4 grid-rows-4  ">
            <FormControl fullWidth>
              <InputLabel>Select Rate</InputLabel>
              <Select
                value={selectCop}
                label="Select Rate"
                onChange={(e) => {
                  setValue("rate", e.target.value);
                  setselectCop(e.target.value);
                }}
              >
                <MenuItem value={120}>
                  <div className="flex justify-between w-full">
                    <Typography>Pro</Typography>
                    <Typography>Rs.120/130</Typography>
                  </div>
                </MenuItem>
                <MenuItem value={110}>
                  <div className="flex justify-between w-full">
                    <Typography>Basic</Typography>
                    <Typography>Rs.110/120</Typography>
                  </div>
                </MenuItem>
              </Select>
            </FormControl>

            <div className=" gap-2">
              <Controller
                name="rate"
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="number"
                    defaultValue=""
                    label="Delivery Rate"
                    InputLabelProps={{ shrink: true }}
                    fullWidth
                    error={errors.rate ? true : false}
                    helperText={errors.rate && errors.rate.message}
                  />
                )}
              />
              <Controller
                name="rate_cod"
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    control={<Checkbox {...field} />}
                    label="Delivery Rate COD"
                  />
                )}
              />
              <Controller
                name="rate_cod"
                control={control}
                render={({ field }) => (
                  <FormControlLabel
                    control={<Checkbox {...field} />}
                    label="Pay Monthly"
                  />
                )}
              />
            </div>
            <Controller
              name="package_price"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="number"
                  defaultValue={0}
                  label="COD Package Price"
                  fullWidth
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">Rs</InputAdornment>
                    ),
                  }}
                  error={errors.package_price ? true : false}
                  helperText={
                    errors.package_price && errors.package_price.message
                  }
                />
              )}
            />
            <Controller
              name="weight"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="number"
                  defaultValue=""
                  label="Package Weight"
                  fullWidth
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="start">kg</InputAdornment>
                    ),
                  }}
                  error={errors.rate ? true : false}
                  helperText={errors.rate && errors.rate.message}
                />
              )}
            />
          </div>
        </Paper>
        <div className="flex justify-center">
          <Button
            className="md:w-input-max w-full"
            variant="contained"
            type="submit"
          >
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}

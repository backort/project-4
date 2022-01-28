import React, { useState } from "react";
import styles from "./ProductTabs.module.scss";
import classNames from "classnames";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import User from "../user/User";
import { Table, TableBody, TableCell, TableRow } from "@mui/material";
import { formatDistance, subDays } from 'date-fns'


export default function ProductTabs({ text, bids }) {
  const [value, setValue] = useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value} classNames={classNames(styles['product-tabs'])}>
      <TabList onChange={handleChange}>
        <Tab label="Details" value="1" className={classNames(styles['tab-details'])}/>
        <Tab label="Bids" value="2" className={classNames(styles['tab-bids'])} />
      </TabList>
      <TabPanel value="1">Item One</TabPanel>
      <TabPanel value="2">
        <Table>
          <TableBody>
            {bids.map((bid, i) => (
              <TableRow
                className={classNames(styles[`table-row-${i}`])}
                key={i}
                sx={{ "&:nth-child(odd) tr": { backgroundColor: "lightblue" } }}
              >
                <TableCell align="right">
                  <User />
                </TableCell>
                <TableCell align="right">{bid.amount}</TableCell>
                <TableCell align="right">{formatDistance(parseISO(bid.date))}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <User />
      </TabPanel>
    </TabContext>
  );
}

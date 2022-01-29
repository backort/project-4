import React, { useState } from "react";
import styles from "./ProductTabs.module.scss";
import classNames from "classnames";
import TabList from "@mui/lab/TabList";
import Tab from "@mui/material/Tab";
import TabPanel from "@mui/lab/TabPanel";
import TabContext from "@mui/lab/TabContext";
import User from "../user/User";
import { formatDistance, parseISO, subDays } from "date-fns";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";

export default function ProductTabs({ text, bids }) {
  const [value, setValue] = useState("1");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <TabContext value={value} className={classNames(styles["product-tabs"])}>
      <TabList onChange={handleChange}>
        <Tab
          label="Details"
          value="1"
          className={classNames(styles["tab-details"])}
        />
        <Tab
          label="Bids"
          value="2"
          className={classNames(styles["tab-bids"])}
        />
      </TabList>
      <TabPanel value="1">{text}</TabPanel>
      <TabPanel value="2">
        <Table>
          <TableBody>
            {bids.map((bid, i) => (
              <TableRow
                key={i}
                className={classNames(`table-row-${i}`)}
                style={{
                  backgroundColor: i % 2 === 1 ? "#4e24f2" : "",
                }}
              >
                <TableCell component="th" scope="row">
                  <User name={bid.name} avatar={bid.avatar} />
                </TableCell>
                <TableCell align="right">{bid.amount}</TableCell>
                <TableCell align="right">
                  {parseISO(
                    formatDistance(subDays(bid.date, 3), new Date(), {
                      addSuffix: true,
                    })
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TabPanel>
    </TabContext>
  );
}

import styles from "./Collector.module.scss";
import classNames from "classnames";
import User from "../user/User";
import { Grid, Typography } from "@mui/material";

export default function Collector({
  name,
  nftsCount,
  avatar,
  verified,
  id,
  type,
}) {
  let lightClass = !type ? styles.light : "";
  return (
    <Grid
      component="div"
      className={classNames(styles.collector, lightClass)}
    >
      <Grid className={classNames(styles.number)} item>
        <Typography variant="h3">{id}</Typography>
      </Grid>
      <Grid className={classNames(styles.user)} item>
        <User
          name={name}
          info={nftsCount}
          avatar={avatar}
          verified={verified}
        />
      </Grid>
    </Grid>
  );
}

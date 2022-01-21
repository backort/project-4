import styles from "./Step.module.scss";
import classNames from "classnames";
import { Grid, Typography } from "@mui/material";

export default function Step({ number, title, description }) {
  return (
    <Grid
      sx={{ display: "flex", alignItems: "center" }}
      className={classNames(styles.infoCard)}
    >
      <Grid item className={classNames(styles.number)}>
        {number}
      </Grid>
      <Grid item className={classNames(styles.text)}>
        <Typography className={classNames(styles.title)} variant="h4">
          {title}
        </Typography>
        <Typography className={classNames(styles.description)}>
          {description}
        </Typography>
      </Grid>
    </Grid>
  );
}

import { Button, Grid, Typography } from "@mui/material";
import styles from "./How.module.scss";
import classNames from "classnames";
import Step from "./Step";
import Link from "next/link";

export default function How({ description, title, items = [], link }) {
  return (
    <Grid className={classNames(styles.howContainer)}>
      <div className={classNames(styles.textContainer)}>
        <Grid item>
          <Typography variant="h2" className={classNames(styles.title)}>
            {title}
          </Typography>
          <Typography paragraph className={classNames(styles.description)}>
            {description}
          </Typography>
        </Grid>
        <Grid item>
          <Link href={link}>
            <Button
              className={classNames(styles.btn)}
              component="a"
              variant="contained"
            >
              LEARN MORE
            </Button>
          </Link>
        </Grid>
      </div>
      <Grid item className={classNames(styles.steps)}>
        {items.map((item, index) => (
          <Step
            title={item.title}
            description={item.description}
            number={index + 1}
          />
        ))}
      </Grid>
    </Grid>
  );
}

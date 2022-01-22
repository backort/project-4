import { Button, Container, Grid, Typography } from "@mui/material";
import styles from "./How.module.scss";
import classNames from "classnames";
import Step from "./Step";
import Link from "next/link";

export default function How({ description, title, items = [], link }) {
  return (
    <div className={classNames(styles.wrapper)}>
      <Grid className={classNames(styles.howContainer)}>
        <div className={classNames(styles.textContainer)}>
          <Grid item>
            <Typography variant="h2" className={classNames(styles.title)}>
              HOW IT WORKS
            </Typography>
            <Typography paragraph className={classNames(styles.description)}>
             Discover, collect, and sell extraordinary NFTs on the world's first & largest NFT marketplace. There are three thing you'll need in place to open your account and start buying or selling NFTs on BUM.
            </Typography>
          </Grid>
          <Grid item>
            <Link href="/">
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
              key={index}
              title={item.title}
              description={item.description}
              number={index + 1}
            />
          ))}
        </Grid>
      </Grid>
    </div>
  );
}

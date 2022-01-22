import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import styles from "./Footer.module.scss";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Link from "next/link";
import Logo from "../logo/Logo";
import classNames from "classnames";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Container className={classNames(styles.container)} maxWidth="xxl">
      <Grid container gap={2} display="flex" alignItems={"center"}>
        <Grid item md={3} display={"flex"} justifyContent={"center"}>
          <Logo type="muted" />
        </Grid>
        <Grid
          item
          md={4}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Typography className={classNames(styles.footerText)} paragraph>
            Boom. All Rights Reserved. 2021
          </Typography>
        </Grid>
        <Grid
          item
          md={3}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-end"}
          height={45}
        >
          <Link href="/policy">
            <a className={classNames(styles.link)}>Privacy Policy</a>
          </Link>
          <Link href="/activity">
            <a className={classNames(styles.link)}>Cookie Policy</a>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

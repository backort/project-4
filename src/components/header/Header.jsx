import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import styles from "./Header.module.scss";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Link from "next/link";
import Logo from "../logo/Logo";
import classNames from "classnames";

export default function Header() {
  return (
    <Container className={classNames(styles.container)} maxWidth="xxl">
      <Grid container gap={2} display="flex" alignItems={"center"}>
        <Grid item md={3} display={"flex"} justifyContent={"center"}>
          <Logo type="default" />
        </Grid>
        <Grid item md={4} display="flex" justify="center">
          <OutlinedInput
            fullWidth
            placeholder="Find items, users and activities"
            className={classNames(styles.search)}
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon style={{ color: "white" }} />
              </InputAdornment>
            }
          />
        </Grid>
        <Grid
          item
          md={3}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-end"}
          height={45}
        >
          <Link href="/">
            <a className={classNames(styles.link)}>Home</a>
          </Link>
          <Link href="/activity">
            <a className={classNames(styles.link)}>Activity</a>
          </Link>
          <Link href="/explore" passHref>
            <Button
              size="small"
              variant="contained"
              component="a"
              disableElevation
            >
              Explore
            </Button>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

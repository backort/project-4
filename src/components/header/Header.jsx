import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import styles from "./Header.module.scss";
import Image from "next/image";
import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import Link from "next/link";
import Logo from "../Logo";

export default function Header() {
  return (
    <Container className={styles.container} maxWidth="xxl">
      <Grid container gap={2} display="flex" alignItems={"center"}>
        <Grid item md={3} display="flex" justify="center">
          <Logo type="default"/>
        </Grid>
        <Grid item md={4} display="flex" justify="center">
          <FormControl fullWidth>
            <OutlinedInput
              placeholder="Find items, users and activities"
              className={styles.search}
              startAdornment={
                <InputAdornment position="start">
                  <SearchIcon style={{ color: "white" }} />
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item md={3} display="flex" justify="center" height={45}>
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/activity">
            <a>Activity</a>
          </Link>
          <Link href="/">
            <a>
              <Button size="small" variant="contained" disableElevation>
                Explore
              </Button>
            </a>
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

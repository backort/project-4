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
import { Menu, MenuItem } from "@mui/material";

export default function Header() {
  return (
    <Container className={styles.container} maxWidth="xl">
      <Grid container gap={2} display="flex" alignItems={"center"}>
        <Grid item md={3} display="flex" justify="center">
          <Image alt="logo" src="/images/logo.svg" width={90} height={50} />
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
          <Menu>
            <MenuItem>
              <Link href="/">
                <a>Home</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/activity">
                <a>Activity</a>
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/">
                <a>
                  <Button size="small" variant="contained" disableElevation>
                    Explore
                  </Button>
                </a>
              </Link>
            </MenuItem>
          </Menu>
        </Grid>
      </Grid>
    </Container>
  );
}

import styles from "./TopCollectors.module.scss";
import classNames from "classnames";
import {
  Container,
  FormControl,
  Grid,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import CollectorColumn from "../collectors/CollectorColumn";
import array from "lodash/array";

export default function TopCollectors({ items }) {
  return (
    <Container maxWidth="xl">
      <Grid className={classNames(styles.header)} container>
        <Grid item xs={12} sm={12} md={8} lg={6}>
          <Typography variant="h1">Top Collectors</Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={4}
          lg={6}
          style={{ justifyContent: "flex-end", display: "flex" }}
        >
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <Select displayEmpty>
              <MenuItem>This week</MenuItem>
              <MenuItem>This month</MenuItem>
              <MenuItem>This year</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container gap={2}>
        {array.chunk(items, 3).map((item, index) => (
          <CollectorColumn key={index} items={item} />
        ))}
      </Grid>
    </Container>
  );
}

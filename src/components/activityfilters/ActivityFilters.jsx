import styles from "./ActivityFilters.module.scss";
import classNames from "classnames";
import {
  FormControl,
  Select,
  InputLabel,
  MenuItem,
  Stack,
  TextField,
  InputAdornment,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function ActivityFilters({ filters }) {
  const [sort, setSort] = useState(1);
  const [price, setPrice] = useState(3);
  const handleSort = (e) => {
    setSort(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className={classNames(styles["activity-filters"])}>
      {filters && (
        <Stack direction="row" spacing={2}>
          <FormControl fullWidth>
            <InputLabel>Sort by</InputLabel>
            <Select label="Sort by" value={sort} onChange={handleSort}>
              {filters.sort.map((s) => (
                <MenuItem key={s.value} value={s.value}>
                  {s.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel>Price range</InputLabel>
            <Select label="Price range" value={price} onChange={handlePrice}>
              {filters.price.map((p) => (
                <MenuItem key={p.value} value={p.value}>
                  {p.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <TextField
              label="Search"
              variant="standard"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon style={{ color: "white" }} />
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </Stack>
      )}
    </div>
  );
}

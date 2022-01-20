import styles from "./Trending.module.scss";
import {
  MenuItem,
  Select,
  Typography,
  Container,
  Grid,
  FormControl,
} from "@mui/material";
import classNames from "classnames";
import CardComponent from "../card/Card";

export default function Trending({ cards = [] }) {
  return (
    <Container>
      <div className={classNames(styles.header)}>
        <Typography variant="h1">Trending</Typography>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <Select displayEmpty>
            <MenuItem>This week</MenuItem>
            <MenuItem>This month</MenuItem>
            <MenuItem>This year</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid key={index} item xs={12} md={3} lg={3}>
            <CardComponent
              name={card.name}
              likes={card.likes}
              mediaUrl={card.mediaUrl}
              user={{
                avatar: card.user.avatar.url,
                verified: card.user.verified,
              }}
              price={card.price}
              currency={card.currency}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

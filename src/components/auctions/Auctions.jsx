import styles from "./Auctions.module.scss";
import {
  MenuItem,
  Typography,
  Grid,
  FormControl,
  Select,
  Container
} from "@mui/material";
import classNames from "classnames";
import CardComponent from "../card/Card";

export default function Auctions({ cards = [] }) {
  return (
    <Container maxWidth="xl">
      <div className={classNames(styles.header)}>
        <Typography variant="h1">&#128293; Live Auctions</Typography>
        <FormControl sx={{ m: 1, minWidth: 200 }}>
          <Select displayEmpty>
            <MenuItem>This week</MenuItem>
            <MenuItem>This month</MenuItem>
            <MenuItem>This year</MenuItem>
          </Select>
        </FormControl>
      </div>
      <Container maxWidth="xl">
        <Grid container spacing={2}>
          {cards.map((card, index) => (
            <Grid key={index} item xs={12} md={3} lg={3}>
              <CardComponent
                name={card.name}
                user={{
                  avatar: card.user.avatar.url,
                  verified: card.user.verified,
                }}
                mediaUrl={card.mediaUrl}
                price={card.price}
                currency={card.currency}
                timeLeft={card.timeLeft}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}

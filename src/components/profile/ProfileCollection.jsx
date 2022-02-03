import styles from "./ProfileCollection.module.scss";
import classNames from "classnames";
import { Container, Grid, Typography } from "@mui/material";
import ProfileCollectionFilters from "./ProfileCollectionFilters";
import CardComponent from "../card/Card";

export default function ProfileCollection({ user, filters, items }) {
  return (
    <div className={classNames(styles["profile-collection"])}>
      <Container>
        <Grid container>
          <Grid item xs={3}>
            <Typography variant="h3">Collections</Typography>
          </Grid>
          <Grid item xs={9}>
            <ProfileCollectionFilters filters={filters} />
          </Grid>
        </Grid>
        <Grid container>
          {items.map((card, i) => (
            <Grid key={i} item xs={3}>
              <CardComponent
                name={card.name}
                likes={card.likes}
                mediaUrl={card.url}
                user={user}
                price={card.price}
                currency={card.currency}
                timeLeft={card.timeLeft}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

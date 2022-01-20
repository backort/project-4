import styles from "./Card.module.scss";
import millify from "millify";
import classNames from "classnames";
import Avatar from "../avatar/Avatar";

import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";

export default function CardComponent({
  name,
  likes = 0,
  mediaUrl,
  user,
  price,
  currency,
}) {
  return (
    <Card sx={{ maxWidth: 345 }} className={classNames(styles.card)}>
      <CardHeader
        avatar={<Avatar url={user.avatar} verified={user.verified} size={55} />}
      />
      <CardMedia
        className={classNames(styles.media)}
        component="img"
        image={mediaUrl}
        alt={mediaUrl}
      />
      <CardContent className={classNames(styles.titleContainer)}>
        <div>
          <Typography className={classNames(styles.title)}>{name}</Typography>
          <Typography className={classNames(styles.price)}>
            {price} {currency}
          </Typography>
        </div>
        <Chip
          label={millify(likes)}
          variant="outlined"
          className={classNames(styles.likes)}
        />
      </CardContent>
    </Card>
  );
}

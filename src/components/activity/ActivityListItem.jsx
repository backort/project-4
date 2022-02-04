import styles from "./ActivityListItem.module.scss";
import classNames from "classnames";
import { formatDistance, parseISO, subDays } from "date-fns";
import Avatar from "../avatar/Avatar";
import Link from "../link/Link";
import Typography from "@mui/material/Typography";

export default function ActivityListItem({ user, created_at, nft, type = "like" }) {
  return (
    <div>
      <Avatar url={user.avatarUrl} verified={user.verified} />
      <Typography variant="paragraph">{`${user.name} ${
        type === "like" ? "liked" : type === "buy" && "bought"
      } ${nft.name} by ${nft.user.name}`}</Typography>
      <Typography variant="paragraph">
        {formatDistance(parseISO(created_at), new Date())}
      </Typography>
    </div>
  );
}

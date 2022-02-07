import styles from "./ActivityListItem.module.scss";
import classNames from "classnames";
import { formatDistance, parseISO, subDays } from "date-fns";
import Avatar from "../avatar/Avatar";
import Typography from "@mui/material/Typography";
import Link from "../link/Link";

export default function ActivityListItem({
  user,
  created_at,
  nft,
  type = "like",
}) {
  return (
    <div className={classNames(styles["activity-list-item"])}>
      <Avatar url={user.avatarUrl} verified={user.verified} />
      <div>
        <Typography variant="paragraph">
          {user.name} {type === "like" ? "liked" : type === "buy" && "bought"}{" "}
          <Link href="/" color="secondary">
            {nft.name}
          </Link>{" "}
          by{" "}
          <Link href="/" color="secondary">
            {nft.user.name}
          </Link>
        </Typography>
        <br />
        <Typography variant="paragraph" className={classNames(styles.secondaryText)}>
          {formatDistance(parseISO(created_at), new Date())}
        </Typography>
      </div>
    </div>
  );
}

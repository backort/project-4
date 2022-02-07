import styles from "./ActivityList.module.scss";
import classNames from "classnames";
import ActivityListItem from "./ActivityListItem";
import { Stack } from "@mui/material";

export default function ActivityList({ items }) {
    console.log(items);
  return (
    <Stack spacing={2} className={classNames(styles["activity-list"])}>
      {items.map((item, index) => (
        <ActivityListItem
          key={index}
          user={item.user}
          created_at={item.created_at}
          nft={item.nft}
          type={item.type}
        />
      ))}
    </Stack>
  );
}

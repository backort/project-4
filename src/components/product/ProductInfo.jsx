import styles from "./ProductInfo.module.scss";
import classNames from "classnames";
import ProductInfoTitle from "./ProductInfoTitle";
import ProductInfoPrice from "./ProductInfoPrice";
import ProductInfoStatus from "./ProductInfoStatus";
import ProductInfoLikes from "./ProductInfoLikes";
import ProductInfoCreator from "./ProductInfoCreator";
import ProductInfoTimer from "./ProductInfoTimer";
import Stack from "@mui/material/Stack";
import { Grid } from "@mui/material";

export default function ProductInfo({
  title,
  creator,
  price,
  currency,
  likes,
  onTimeEnd,
  timeEnd,
  isLive,
}) {
  console.log(creator);
  return (
    <div className={classNames(styles["product-info"])}>
      <ProductInfoTitle text={title} />
      <Stack direction="row" spacing={2} className={classNames(styles.stats)}>
        <ProductInfoPrice amount={price} currency={currency} />
        <ProductInfoLikes amount={likes} />
      </Stack>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <ProductInfoCreator
            name={creator?.username}
            avatar={creator?.avatar.url}
            verified={creator?.confirmed}
          />
        </Grid>
        <Grid item xs={5}>
          <ProductInfoTimer timeEnd={timeEnd} onTimeEnd={onTimeEnd} />
        </Grid>
      </Grid>
      {isLive && <ProductInfoStatus status={isLive} />}
    </div>
  );
}

import styles from "./ProductImage.module.scss";
import classNames from "classnames";

export default function ProductImage({ url }) {
  return (
    <div className={classNames(styles.productImage)}>
      <img src={url} className={classNames(styles.image)} />
    </div>
  );
}

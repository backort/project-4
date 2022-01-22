import styles from "./ProductImage.module.scss";
import classNames from "classnames";

export default function ProductImage({ url }) {
  return (
    <div className={classNames(styles['ProductImage_product-image'])}>
      <img src={url} className={classNames(styles.ProductImage_image)} />
    </div>
  );
}

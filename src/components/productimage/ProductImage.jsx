import styles from "./ProductImage.module.scss";
import classNames from "classnames";

export default function ProductImage({ url }) {
  return (
    <div className={classNames(style.product - image)}>
      <img src={url} className={classNames(style.image)} />
    </div>
  );
}

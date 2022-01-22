import styles from "./CollectorColumn.module.scss";
import classNames from "classnames";
import Collector from "./Collector";

export default function CollectorColumn({ items }) {
  return (
    <div className={classNames(styles.container)}>
      {items.map((item, index) => (
        <Collector
          key={item.id}
          name={item.username}
          nftsCount={item.nfts.length}
          avatar={item.avatar.url}
          verified={item.verified}
          id={item.id}
          type={index % 2 === 0 && "light"}
        />
      ))}
    </div>
  );
}

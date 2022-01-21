import styles from "./Collector.module.scss";
import classNames from "classnames";
import Collector from "./Collector";

export default function CollectorsColumn({ items }) {
  return (
    <div className={classNames(styles.container)}>
      {items.map((item, index) => (
        <Collector
          key={item.id}
          name={item.name}
          nftsCount={item.nftsCount}
          avatar={item.avatar}
          verified={item.verified}
          id={item.id}
          type={index % 2 === 0 && "light"}
        />
      ))}
    </div>
  );
}

import styles from "./Featured.module.scss";
import classNames from "classnames";
import { Container, ImageList, ImageListItem } from "@mui/material";
import { useRouter } from "next/router";

export default function Featured({ items = [] }) {
  const router = useRouter();
  return (
    <Container>
      <ImageList variant="quilted" cols={6} gap={10}>
        {items.map((item, index) => (
          <ImageListItem
            key={index}
            cols={index === 0 ? 3 : item.cols || 1}
            rows={index === 0 ? 3 : item.rows || 1}
          >
            <img
              onClick={(e) => {
                e.preventDefault();
                router.push(item.id);
              }}
              src={item.source.url}
              alt={item.name}
              loading="lazy"
              className={classNames(styles.image)}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}

import styles from "./Featured.module.scss";
import classNames from "classnames";
import { Container, ImageList, ImageListItem } from "@mui/material";
import { useRouter } from "next/router";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Featured({ items = [] }) {
  const router = useRouter();
  return (
    <Container>
      <ImageList variant="quilted" cols={6} gap={10}>
        {items.map((item, index) => (
          <ImageListItem
            key={index}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              onClick={(e) => {
                e.preventDefault();
                router.push(item.id);
              }}
              {...srcset(item.source.url, 121, item.rows, item.cols)}
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

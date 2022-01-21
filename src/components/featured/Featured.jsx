import styles from "./Features.module.scss";
import classNames from "classnames";
import { Container, ImageList, ImageListItem } from "@mui/material";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Featured({ items = [] }) {
  return (
    <Container>
      <ImageList
        sx={{ width: 800, height: 450 }}
        variant="quilted"
        cols={6}
        gap={10}
      >
        {items.map((item) => (
          <ImageListItem
            key={item.title}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.image, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
              className={classNames(styles.image)}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  );
}

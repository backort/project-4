import styles from "./Featured.module.scss";
import classNames from "classnames";
import { Container, ImageList, ImageListItem } from "@mui/material";
import { useRouter } from "next/router";

export default function Featured({ items = [] }) {
  const router = useRouter();
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
              onClick={(e) => {
                e.preventDefault();
                router.push(item.href);
              }}
              src={item.image}
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

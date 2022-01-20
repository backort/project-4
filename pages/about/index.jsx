import * as React from "react";
import Container from "@mui/material/Container";
import Avatar from "../../src/components/avatar/Avatar";

export default function About() {
  return (
    <Container maxWidth="sm">
      <Avatar url="/images/avatar.png" verified={true} size="90" />
    </Container>
  );
}

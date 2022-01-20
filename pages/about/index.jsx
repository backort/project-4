import * as React from "react";
import Container from "@mui/material/Container";
import User from "../../src/components/user/User";
import Avatar  from "../../src/components/avatar/Avatar";

export default function About() {
  return (
    <Container maxWidth="sm">
      <User />
      <Avatar url={'/images/avatar.png'} />
    </Container>
  );
}

import * as React from "react";
import Container from "@mui/material/Container";
import User from "../../src/components/user/User";
import Avatar from "../../src/components/avatar/Avatar";
import Card from "../../src/components/card/Card";

export default function About() {
  return (
    <Container maxWidth="sm">
      <Card
        name="terlik"
        likes={2230}
        mediaUrl="/images/nft.jpg"
        user={{ avatar: "/images/avatar.png", verified: true }}
        price="10"
        currency="ETH"
      />
    </Container>
  );
}

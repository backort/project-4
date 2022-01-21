import * as React from "react";
import Container from "@mui/material/Container";
import User from "../../src/components/user/User";
import Avatar from "../../src/components/avatar/Avatar";
import Card from "../../src/components/card/Card";
import Trending from "../../src/components/trending/Trending";
import Auctions from "../../src/components/auctions/Auctions";
import Footer from "../../src/components/footer/Footer";
import Step from "../../src/components/how/Step";
import How from "../../src/components/how/How";
import Featured from "../../src/components/featured/Featured";
import Collector from "../../src/components/collector/Collector";
import CollectorsColumn from "../../src/components/collector/CollectorsColumn";

export default function About() {
  let collectors = [
    {
      name: "testname",
      nftsCount: 123,
      avatar: "/images/avatar.png",
      verified: true,
      id: 1,
    },
    {
      name: "asdef1",
      nftsCount: 99,
      avatar: "/images/avatar.png",
      verified: false,
      id: 2,
    },
    {
      name: "terlika1",
      nftsCount: 6553,
      avatar: "/images/avatar.png",
      verified: true,
      id: 3,
    },
  ];

  return <CollectorsColumn items={collectors} />;
}

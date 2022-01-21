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
import Collector from "../../src/components/collectors/Collector";
import CollectorsColumn from "../../src/components/collectors/CollectorColumn";
import TopCollectors from "../../src/components/topcollectors/TopCollectors";

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
    {
      name: "terlika15",
      nftsCount: 555,
      avatar: "/images/avatar.png",
      verified: true,
      id: 4,
    },
    {
      name: "terlika1",
      nftsCount: 6553,
      avatar: "/images/avatar.png",
      verified: true,
      id: 5,
    },
    {
      name: "terlika1",
      nftsCount: 6553,
      avatar: "/images/avatar.png",
      verified: true,
      id: 6,
    },
    {
      name: "terlika1",
      nftsCount: 6553,
      avatar: "/images/avatar.png",
      verified: true,
      id: 7,
    },
    {
      name: "terlika1",
      nftsCount: 6553,
      avatar: "/images/avatar.png",
      verified: true,
      id: 8,
    },
    {
      name: "terlika1",
      nftsCount: 6553,
      avatar: "/images/avatar.png",
      verified: true,
      id: 9,
    },
    {
      name: "terlika1",
      nftsCount: 6553,
      avatar: "/images/avatar.png",
      verified: true,
      id: 10,
    },
    {
      name: "terlika1",
      nftsCount: 6553,
      avatar: "/images/avatar.png",
      verified: true,
      id: 11,
    },
    {
      name: "terlika1",
      nftsCount: 6553,
      avatar: "/images/avatar.png",
      verified: true,
      id: 12,
    },
  ];

  return <TopCollectors items={collectors} />;
}

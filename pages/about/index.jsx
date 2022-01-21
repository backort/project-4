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

export default function About() {
  const cards = [
    {
      name: "Ivy",
      user: {
        avatar: {
          url: "images/avatar.png",
        },
        verified: true,
      },
      mediaUrl: "images/nft.jpg",
      price: 1,
      currency: "ETH",
      timeLeft: 3000,
    },
    {
      name: "Judie",
      user: {
        avatar: {
          url: "images/avatar.png",
        },
        verified: true,
      },
      mediaUrl: "images/nft.jpg",
      price: 2.3,
      currency: "ETH",
      timeLeft: 3000,
    },
    {
      name: "Juniper",
      user: {
        avatar: {
          url: "images/avatar.png",
        },
        verified: true,
      },
      mediaUrl: "images/nft.jpg",
      price: 5,
      currency: "ETH",
      timeLeft: 3000,
    },
    {
      name: "Maple",
      user: {
        avatar: {
          url: "images/avatar.png",
        },
        verified: true,
      },
      mediaUrl: "images/nft.jpg",
      price: 10,
      currency: "ETH",
      timeLeft: 3000,
    },
  ];

  const hows = {
    description:
      "Discover, collect, and sell extraordinary NFTs on the worlds first & largets NFT marketplace. There are thre things you'll need in place to open your account and start buying or selling NFTs on BUM.",
    title: "How it works",
    items: [
      {
        title: "NFT",
        description: "first one",
      },
      {
        title: "NFT",
        description: "second one",
      },
      {
        title: "NFT",
        description: "third one",
      },
    ],
    link: "String",
  };
  return (
    <How
      title={hows.title}
      description={hows.description}
      items={hows.items}
      link={hows.link}
    />
  );
}

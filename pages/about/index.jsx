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
  let items = [
    {
      image:
        "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=500&h=500",
      title: "Breakfast",
      rows: 2,
      cols: 3,
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=500&h=500",
      title: "Burger",
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522770179533-24471fcdba45?w=500&h=500",
      title: "Camera",
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c?w=500&h=500",
      title: "Coffee",
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1533827432537-70133748f5c8?w=500&h=500",
      title: "Hats",
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=500&h=500",
      title: "Honey",
      href: "/about",
    },
    {
      image:
        "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6?w=500&h=500",
      title: "Basketball",
      href: "/about",
    },
  ]
  return (
    <React.Fragment>
      <How
        title={hows.title}
        description={hows.description}
        items={hows.items}
        link={hows.link}
      />
      <Featured items={items}/>
    </React.Fragment>
  );
}

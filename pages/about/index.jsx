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
import TopCollectors from "../../src/components/collectors/TopCollectors";
import ProductInfoCreator from "../../src/components/product/ProductInfoCreator";
import ProductInfoTimer from "../../src/components/product/ProductInfoTimer";
import ProductInfo from "../../src/components/product/ProductInfo";
import ProductTabs from "../../src/components/product/ProductTabs";
import ProductActions from "../../src/components/product/ProductActions";
import ProductContainer from "../../src/components/product/ProductContainer";

export default function About() {
  let info = {
    title: "hey",
    creator: "terlik",
    price: 123,
    currency: "ETH",
    likes: 63642,
    onTimeEnd: null,
    timeEnd: null,
    isLive: false,
  };

  let bids = [
    {
      user: {
        name: "tirlik",
        avatar: "/images/avatar.png",
        verified: true,
      },
      amount: 123,
      date: "2016-01-01",
    },
    {
      user: {
        name: "tirlik",
        avatar: "/images/avatar.png",
        verified: true,
      },
      amount: 123,
      date: "2016-01-01",
    },
    {
      user: {
        name: "tirlik",
        avatar: "/images/avatar.png",
        verified: true,
      },
      amount: 123,
      date: "2016-01-01",
    },
    {
      user: {
        name: "tirlik",
        avatar: "/images/avatar.png",
        verified: true,
      },
      amount: 123,
      date: "2016-01-01",
    },
  ];

  return <ProductContainer />;
}

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
import ProfileCollectionFilters from "../../src/components/profile/ProfileCollectionFilters";
import ProfileCollection from "../../src/components/profile/ProfileCollection";
import ActivityFilters from "../../src/components/activity/ActivityFilters";
import ActivityItem from "../../src/components/activity/ActivityListItem";

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

  let filters = {
    sort: [
      { label: "Name (Ascending)", value: 1 },
      { label: "Name (Descending)", value: 2 },
    ],
    type: [
      { label: "Liked", value: 3 },
      {
        label: "Bought",
        value: 4,
      },
    ],
  };

  let items = [{}, {}];
  let user = [
    { name: "terlik", avatar: "./images/avatar.png", verified: false },
  ];

  let activityItem = {
    created_at: "21.02.2020",
    user: {
      avatarUrl: "images/avatar.png",
      verified: true,
      name: "terlik",
    },
    nft: {
      name: "ball",
      user: {
        name: "terlik2",
        avatarUrl: "images/avatar.png",
        verified: true,
      },
    },
    type: "buy",
  };

  return (
    <ActivityItem
      user={activityItem.user}
      created_at={activityItem.created_at}
      nft={activityItem.nft}
      type={activityItem.type}
    />
  );
}

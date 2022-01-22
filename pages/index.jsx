import React, { useState, Fragment, useEffect } from "react";
import Header from "../src/components/header/Header";
import Featured from "../src/components/featured/Featured";
import Trending from "../src/components/trending/Trending";
import TopCollectors from "../src/components/collectors/TopCollectors";
import How from "../src/components/how/How";
import Auctions from "../src/components/auctions/Auctions";
import Footer from "../src/components/footer/Footer";
import dataFeatured from "../data/featured.json";
import dataTrending from "../data/trending.json";
import dataUsers from "../data/users.json";
import dataNfts from "../data/nfts.json";

export default function Index() {
  const [featuredCards, setFeaturedCards] = useState([]);
  const [trendingCards, setTrendingCards] = useState([]);
  const [users, setUsers] = useState([]);
  const [nfts, setNfts] = useState([]);
  useEffect(() => {
    setFeaturedCards(dataTrending);
    setTrendingCards(dataFeatured);
    setUsers(dataUsers);
    setNfts(dataNfts);
  }, []);
  return (
    <Fragment>
      <Header />
      <div className="app">
        <Featured items={featuredCards} />
        <Trending cards={trendingCards} />
        <TopCollectors />
        <How />
        <Auctions cards={nfts} />
      </div>
      <Footer />
    </Fragment>
  );
}

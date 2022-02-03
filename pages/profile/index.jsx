import Header from "../../src/components/header/Header";
import ProfileHero from "../../src/components/profile/ProfileHero";
import ProfileUser from "../../src/components/profile/ProfileUser";
import ProfileCollection from "../../src/components/profile/ProfileCollection";
import Footer from "../../src/components/footer/Footer";
import profileData from "../../data/profile.json";
import { useState, useEffect } from "react";
export default function profile() {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    setProfile(profileData);
  }, []);
  return (
    <div>
      <Header />
      <ProfileHero image={profile.avatar?.backgroundUrl} />
      <ProfileUser
        name={profile.username}
        info={profile.info}
        avatar={profile.avatar?.url}
        verified={profile.verified}
      />
      <ProfileCollection
        user={profile}
        filters={filters}
        items={profile.nfts}
      />
      <Footer />
    </div>
  );
}

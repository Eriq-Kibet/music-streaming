import React from "react";
import Navigation from "../Navigation/Navigation";
import MusicCard from "./MusicCard";
import Search from "./Search";
import Stream from "./Stream";

function Home() {
  return (
    <>
      <Navigation />
      <Search />
      <MusicCard />
      <div>
        <h1>Homeeee</h1>
      </div>
      <Stream />
    </>
  );
}

export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "../components/data.css";
import SimplePopover from "./SimplePopover";
import Nav from "./Nav";


function Data() {
  const [Music, setMusic] = useState([], {});
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("https://itunes.apple.com/us/rss/topalbums/limit=100/json")
      .then((data) => {
        setMusic(data.data.feed.entry);
     console.log(["im:name"].label)})  
      .catch((err) => console.log(err));
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value.toLowerCase());
  };

  const filtered = Music.length
    ? Music.filter(
        (music) =>
          music["im:name"]["label"].toLowerCase().includes(search) ||
          music["im:artist"]["label"].toLowerCase().includes(search)
      )
    : [];

 
  return (
    <div>
      <Nav onChange={handleSearch} placeHolder={"search title, artist"} />
      <article id="article" className="albums">
        <ul className="album-items">
          {filtered.map((Music) => {
            const { id } = Music;
            return (
              <div key={id.attributes["im:id"]} className="album">
                <li className="album-list" key={id.attributes["im:id"]}>
                    <a  href={Music["id"].label} target="_blank" rel="noreferrer"><i className="fas fa-shopping-cart"></i></a>
                  <SimplePopover Music={Music}>
                    <img
                      src={Music["im:image"][2].label}
                      alt={Music["im:name"].label}
                    />
                  </SimplePopover>
                </li>
              </div>
            );
          })}
        </ul>
      </article>
    </div>
  );
}



export default Data;

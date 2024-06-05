import React from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";

const Card = ({
  title,
  poster,
  director,
  genre,
  stars,
  pageViews,
  totalVoted,
  releasedDate,
  runTime = 123,
  language = "English",
}) => {
  const date = new Date(releasedDate * 1000);
  const formattedDate = new Intl.DateTimeFormat("en-US", {
    // year: "numeric",
    month: "short",
    day: "2-digit",
  }).format(date);

  const starsCombined = stars.join("");
  const movieStars =
    starsCombined.length < 20
      ? stars.join(", ")
      : `${starsCombined.slice(0, 20)} ...`;

  return (
    <div className="movie-card">
      <div className="votes">
        <div>
          <BiSolidUpArrow />
        </div>
        <div>
          <p>{totalVoted}</p>
        </div>
        <div>
          <BiSolidDownArrow />
        </div>
        <div>Votes</div>
      </div>
      <div className="img">
        <img src={poster} alt="movie" />
      </div>
      <div className="details">
        <h2>{title}</h2>
        <p>
          <span>Genre</span> : {genre}
        </p>
        <p>
          <span>Director</span> : {director}
        </p>
        <p>
          <span>Starring</span> : {movieStars}
        </p>
        <p>
          {runTime} mins | {language} | {formattedDate}
        </p>
        <p className="detail-vote">
          {pageViews} views | Voted by {totalVoted} people
        </p>
        <button className="watch-now-btn">Wathch Now</button>
      </div>
    </div>
  );
};

export default Card;

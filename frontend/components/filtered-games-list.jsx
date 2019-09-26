import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Grid from "./grid";
import Game from "./game";
// import Checkbox from "./checkbox";
import Search from "./search";

//TODO: LOAD MORE

const FilteredGamesList = ({ games, noMatchesText }) => {
  const [filteredGames, setFilteredGames] = useState(games);
  const [searchString, setSearchString] = useState("");
  const [isCheckboxChecked, setCheckboxChecked] = useState(false);

  const handleOnChange = e => {
    setSearchString(e.target.value);
  };

  const handleOnClickDelete = e => {
    setSearchString("");
  };

  useEffect(() => {
    //TODO: concat name, alt name and desc in one string -- then search
    //TODO:special characters crash
    setFilteredGames(
      games.filter(
        game =>
          game.title.toLowerCase().search(searchString.toLowerCase()) !== -1 ||
          game.description.toLowerCase().search(searchString.toLowerCase()) !==
            -1
      )
    );
  }, [searchString]);

  // const onCheckboxChange = e => {
  //   if (isCheckboxChecked) {
  //     setCheckboxChecked(false);

  //     setFilteredGames(games);
  //   } else {
  //     setCheckboxChecked(true);

  //     setFilteredGames(
  //       games.filter(
  //         game =>
  //           game.playerCount
  //             .toString()
  //             .toLowerCase()
  //             .search("2") !== -1 //TODO match player count
  //       )
  //     );
  //   }
  // };

  return (
    <div className="filtered-games-list">
      <div className="filtered-games-list__filters">
        <div className="filtered-games-list__search">
          <Search
            id="filtered-games-search-0"
            labelText="Filter the list of games below"
            placeholderText="e.g. genres, players, director, etc"
            value={searchString}
            onChange={handleOnChange}
            onClickDelete={handleOnClickDelete}
          />
        </div>
        {/* <Checkbox
          onChange={onCheckboxChange}
          isChecked={isCheckboxChecked}
          labelText="2 players only"
        /> */}
      </div>
      {filteredGames.length > 0 && (
        <div className="filtered-games-list__list">
          <Grid theme={Grid.themes.twoColumns}>
            {filteredGames.map(game => {
              const { _id } = game;

              return <Game {...game} key={_id} />;
            })}
          </Grid>
        </div>
      )}
      <div className="filtered-games-list__messages">
        {filteredGames.length === 0 && (
          <div className="filtered-games-list__message">
            <p>{noMatchesText}</p>
          </div>
        )}
      </div>
      <style jsx>
        {`
          .filtered-games-list {
            $self: &;

            &__search {
              margin-bottom: 1rem;
            }

            &__filters {
              margin-bottom: 2rem;
            }

            &__list {
            }
          }
        `}
      </style>
    </div>
  );
};

FilteredGamesList.propTypes = {
  games: PropTypes.array.isRequired,
  noMatchesText: PropTypes.string
};

FilteredGamesList.defaultProps = {
  games: [],
  noMatchesText: "No matches found"
};

export default FilteredGamesList;

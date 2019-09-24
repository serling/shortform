import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import List from "./list";
import Game from "./game";
// import Checkbox from "./checkbox";
import Search from "./search";

const FilteredGamesList = ({ games, noMatchesText }) => {
  const [filteredGames, setFilteredGames] = useState(games);
  const [searchString, setSearchString] = useState("");
  const [isCheckboxChecked, setCheckboxChecked] = useState(false);

  const handleOnChange = e => {
    setSearchString(e.target.value);
  };

  useEffect(() => {
    //TODO: concat name, alt name and desc in one string -- then search
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
  //   setCheckboxChecked(!isCheckboxChecked);

  //   setFilteredGames(
  //     games.filter(
  //       game => game.title.toLowerCase().search("superheroes") !== -1 //TODO match player count
  //     )
  //   );
  // };

  return (
    <div className="filtered-games-list">
      <div className="filtered-games-list__filters">
        <div className="filtered-games-list__search">
          <Search onChange={handleOnChange} />
        </div>
        {/* <Checkbox
          onChange={onCheckboxChange}
          isChecked={isCheckboxChecked}
          labelText="2 players only"
        /> */}
      </div>
      {filteredGames.length > 0 && (
        <div className="filtered-games-list__list">
          <List>
            {filteredGames.map(game => {
              const { _id } = game;

              return <Game {...game} key={_id} />;
            })}
          </List>
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
              padding-top: 1rem;
              border-top: 1px solid #eaeaea;
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

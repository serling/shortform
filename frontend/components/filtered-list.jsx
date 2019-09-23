import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import List from "./list";
import Game from "./game";
// import Checkbox from "./checkbox";
import Search from "./search";

const FilteredList = ({ games }) => {
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
    <div className="filtered-list">
      <div className="filtered-list__filters">
        <div className="filtered-list__search">
          <Search onChange={handleOnChange} />
        </div>
        {/* <Checkbox
          onChange={onCheckboxChange}
          isChecked={isCheckboxChecked}
          labelText="2 players only"
        /> */}
      </div>
      <List>
        {filteredGames.map(game => {
          const { _id } = game;

          return <Game {...game} key={_id} />;
        })}
      </List>
      <style jsx>
        {`
          .filtered-list {
            $self: &;

            &__search {
              margin-bottom: 1rem;
            }

            &__filters {
              margin-bottom: 2rem;
            }
          }
        `}
      </style>
    </div>
  );
};

FilteredList.propTypes = {
  games: PropTypes.array.isRequired
};

FilteredList.defaultProps = {
  games: []
};

export default FilteredList;

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import List from "./list";
import Game from "./game";
import Search from "./search";

const FilteredList = ({ games }) => {
  const [filteredGames, setFilteredGames] = useState(games);
  const [searchString, setSearchString] = useState("");

  const handleOnChange = e => {
    setSearchString(e.target.value);
  };

  useEffect(() => {
    setFilteredGames(
      games.filter(
        game =>
          game.title.toLowerCase().search(searchString.toLowerCase()) !== -1
      )
    );
  }, [searchString]);

  return (
    <div className="filtered-list">
      <div className="filtered-list__search">
        <Search onChange={handleOnChange} />
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
              margin-bottom: 2rem;
            }
          }
        `}
      </style>
    </div>
  );
};

FilteredList.defaultProps = {};

FilteredList.propTypes = {};

export default FilteredList;

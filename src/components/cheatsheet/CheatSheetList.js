import React from 'react';
import PropTypes from 'prop-types';
import CheatSheet from './CheatSheet';

const CheatSheetList = ({ cheats, cheatId, handleDelete, searchText }) => {
  if (cheats.length > 0) {
    return (
      <ul className="masonry">
        {
          cheats
            .filter(cheat => cheat.title.toLowerCase().includes(searchText.toLowerCase()))
            .map((cheat, index) => (
              <CheatSheet
                key={index}
                cheatId={cheatId}
                handleDelete={handleDelete}
                cheat={cheat}/>
            )
            )
        }
      </ul>
    );
  }
  return <h1>Your have no Cheats</h1>;
};

CheatSheetList.propTypes = {
  searchText: PropTypes.string.isRequired,
  cheats: PropTypes.array.isRequired,
  cheatId: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default CheatSheetList;

import React from 'react';
import { connect } from 'react-redux';
import CheatSheet from './CheatSheet';

const CheatSheetList = ({ cheats }) => {
  // console.log('props', cheats.length);
  if (cheats.length > 0) {
    return (
      <ul className="masonry">
        {
          cheats.map((cheat) => (
            <CheatSheet cheat={cheat}/>
          )
          )
        }
      </ul>
    );
  }
  return <h1>Your have no Cheats</h1>;
};

export default CheatSheetList;

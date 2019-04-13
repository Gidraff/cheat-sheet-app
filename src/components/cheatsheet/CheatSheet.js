import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CheatCommand from './CheatCommand';

const CheatSheet = ({ cheat, handleDelete, cheatId }) => {
  if (cheat.commands) {
    return (
      <div className="item">
        <div className="item_header">
          <Link  to={`/cheats/${cheat._id}/commands`}><h5>{cheat.title}</h5></Link>
          <span onClick={() => handleDelete(cheat._id)} className="glyphicon glyphicon-trash delete_icon"></span>
          {/* <button >X</button> */}
        </div>
        <li className="card__text">
          {cheat.commands.map(
            command => <CheatCommand
              cheatId={cheatId}
              command={command}/>)
          }
        </li>
      </div>
    );
  }
  if (cheat.title) {
    return <h1 className="card">{cheat.title}</h1>;
  }
  return <h1>No items available</h1>;

};

CheatSheet.propTypes = {
  cheats: PropTypes.array.isRequired,
  cheatId: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default CheatSheet;

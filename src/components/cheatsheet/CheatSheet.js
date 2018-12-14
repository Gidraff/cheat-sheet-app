import React from 'react';
import CheatCommand from './CheatCommand';
import { Link } from 'react-router-dom';

const CheatSheet = ({ cheat }) => {
  if (cheat.commands) {
    return (
      <div className="item">
        <h5><Link to={`/cheats/${cheat._id}`}>{cheat.title}</Link></h5>
        <li className="card__text">
          {cheat.commands.map(command => <CheatCommand command={command} />)
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

export default CheatSheet;

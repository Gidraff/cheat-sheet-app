import React from 'react';

const CheatCommand = ({ command }) => {
  console.log('command', command);
  return (
    <li className="command" key={command._id}>
      <h6>{command.description}</h6>
      <span><i>{command.command}</i></span>
    </li>
  );
};

export default CheatCommand;

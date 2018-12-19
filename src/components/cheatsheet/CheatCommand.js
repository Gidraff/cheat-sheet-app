import React from 'react';
import PropTypes from 'prop-types';

const CheatCommand = ({ command, cheatId, handleDelete }) => {
  if (!cheatId) {
    return (
      <li className="cheat_command"
        key={command._id}>
        <div
          className="cheat_command_item">
          <b
            className="description">
            {command.description}
          </b><br/>
          <b
            className="command">
            ${command.command}
          </b>
        </div>
        <hr/>
      </li>
    );
  }
  return (
    <li className="cheat_command" key={command._id}>
      <div>
        <b
          className="description">
          {command.description}
        </b><br/>
        $<b
          className="command">
          {command.command}>
        </b>
      </div>
      <div className="btn_container">
        <div>
          <span
            onClick={() => handleDelete(command._id)}
            className="glyphicon glyphicon-trash delete_icons">
          </span>
        </div>
      </div>
    </li>
  );
};

CheatCommand.propTypes = {
  command: PropTypes.object.isRequired,
  cheatId: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired
};

export default CheatCommand;

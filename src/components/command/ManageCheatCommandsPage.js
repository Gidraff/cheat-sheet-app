import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as commandActions from '../../actions/commandActions';
import * as cheatActions from '../../actions/cheatActions';
import CheatCommand from '../cheatsheet/CheatCommand';

class ManageCheatCommandsPage extends Component {

  componentDidMount(){
    const { cheatId } = this.props.match.params;
    if(cheatId){
      this.props.commandActions.fetchAllcheatCommands(cheatId);
      this.props.cheatActions.fetchSingleCheatSheet(cheatId);
    }
  }

  componentDidUpdate(prevProps) {
    if(this.props.commands !== prevProps.commands) {
      this.setState({commands: prevProps.commands});
    }
  }

  handleDelete = (commandId) => {
    if (commandId) {
      const { cheatId } = this.props.match.params;
      this.props.commandActions.deleteCommand(
        cheatId,
        commandId
      )
    }
  }

  render() {
    const { title } = this.props.singleCheat;
    const { commands } = this.props;
    const { cheatId } = this.props.match.params;
    return (
      <div
        className="single_cheat">
        <ul>
          <h5 className="item_header">
            {title}
          </h5>
          {
            commands.length > 0 ?
            commands.map(command => <CheatCommand
                cheatId={cheatId}
                handleDelete={this.handleDelete}
                command={command}/>) :
                <div className="empty_command"><h3>No commands found</h3></div>
          }
        </ul>
      </div>
    );
  }
}

ManageCheatCommandsPage.propTypes = {
  commands: PropTypes.array.isRequired,
  singleCheat: PropTypes.object.isRequired,
  commandActions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  singleCheat: state.singleCheat,
  commands: state.commands
});

const mapDispatchToProps = (dispatch) => ({
  commandActions: bindActionCreators(commandActions, dispatch),
  cheatActions: bindActionCreators(cheatActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ManageCheatCommandsPage));

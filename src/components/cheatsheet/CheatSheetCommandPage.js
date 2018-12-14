import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as cheatActions from '../../actions/cheatActions';

class CheatSheetCommandPage extends Component {

  componentDidMount(){
    this.props.cheatActions.fetchSingleCheatSheet(this.props.match.params.cheatId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.singleCheatSheet !== nextProps.singleCheatSheet) {
      this.setState({singleCheat: nextProps.singleCheatSheet});
    }
  }

  render(){
    const { commands, title } = this.props.singleCheat;
    if(commands.length <= 0) {
      return (
        <div>
          <h5>{title}</h5>
          <p>This cheat has not commands.</p>
        </div>
      );
    }
    return (
      <div className="single_cheat">
        <h5>{title}</h5>
        <ul>
          {
            commands.length > 0 ? commands.map(command => (
              <li>
                <span>{command.description}</span>
                <p>{command.command}</p>
              </li>
            )) :  <li>No commands available</li>
          }

        </ul>
      </div>
    );
  }
}


const mapStateToProps = state => ({
  singleCheat: state.singleCheat
});

const mapDispatchToProps = (dispatch) => ({
  cheatActions: bindActionCreators(cheatActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CheatSheetCommandPage));

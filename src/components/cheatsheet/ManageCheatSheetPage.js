import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as cheatActions from '../../actions/cheatActions';
import CheatSheetList from './CheatSheetList';

class ManageCheatSheetPage extends Component {
  constructor(props){
    super(props);
    this.state ={
      cheats: []
    };
  }
  componentDidMount(){
    this.props.cheatActions.fetchCheatSheets();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.cheats.docs !== nextProps.cheats.docs) {
      this.setState({cheats: nextProps.cheats.docs});
    }
  }

  render() {
    if (this.state.cheats.length > 0) {
      return (
        <div className='main_content'>
          <CheatSheetList
            cheats={this.props.cheats.docs}
          />
        </div>
      );
    }
    return (
      <div>
        <span>No Cheats available</span>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cheats: state.cheats
});

const mapDispatchToProps = (dispatch) => ({
  cheatActions: bindActionCreators(cheatActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ManageCheatSheetPage));

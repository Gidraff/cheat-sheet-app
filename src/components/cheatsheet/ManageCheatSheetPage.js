import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as cheatActions from '../../actions/cheatActions';
import CheatSheetList from './CheatSheetList';
import SearchInput from './SearchInput';

class ManageCheatSheetPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    }
  }
  componentDidMount(){
    this.props.cheatActions.fetchCheatSheets();
    this.props.cheatActions.resetSingleCheatSheet();
  }

  componentDidUpdate(prevProps) {
    if(this.props.cheats !== prevProps.cheats) {
      this.setState({cheats: this.props.cheats});
    }
  }

  handleDelete = (cheatId) => {
    if (cheatId) {
      this.props.cheatActions.deleteCheatSheet(cheatId)
    }
    return;
  }

  handleOnChange = (event) => {
    this.setState({ searchText: event.target.value })
  };

  render() {
    const {cheats}  = this.props;
    const { cheatId } = this.props.match.params;
    if (cheats.length > 0) {
      return (
        <div className='main_content'>
          <SearchInput
            value={this.state.searchText}
            handleOnChange={this.handleOnChange}
          />
          <CheatSheetList
            searchText={this.state.searchText}
            cheatId={cheatId}
            handleDelete={this.handleDelete}
            cheats={cheats}
          />
        </div>
      );
    }
    return (
      <div className='empty_content'>
        <h2>No cheats available for this User</h2>
      </div>
    );
  }
}

ManageCheatSheetPage.propTypes = {
  cheats: PropTypes.array.isRequired,
  cheatActions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  cheats: state.cheats
});

const mapDispatchToProps = (dispatch) => ({
  cheatActions: bindActionCreators(cheatActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ManageCheatSheetPage));

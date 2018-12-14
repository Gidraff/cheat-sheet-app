import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as cheatActions from '../../actions/cheatActions';


class SearchInput extends Component  {
  render() {
    console.log('tjhos====> search', this.props);
    return (
      <form className="form-inline md-form form-sm active-purple active-purple-2 mt-2 search_bar">
        <label>
          <input type="search" class="searchfieldz" placeholder="Search anything " value="" name="s" title="Search for:" autocomplete="off"/>
        </label>
        <button type="submit" class="searchButton">
          <i class="fa fa-search"></i>
        </button>
      </form>
    );

  }
}

const mapStateToProps = state => ({
  cheats: state.cheats
});

const mapDispatchToProps = (dispatch) => ({
  cheatActions: bindActionCreators(cheatActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SearchInput));

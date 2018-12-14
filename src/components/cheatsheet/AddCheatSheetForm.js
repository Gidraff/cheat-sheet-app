import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cheatActions from '../../actions/cheatActions';
import TextInput from '../common/TextInput';



class AddCheatSheetForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      title: '',
      titleValid: false,
      formValid: false,
      formErrors: {
        title: ''
      }
    };
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let titleValid = this.state.titleValid

    switch (fieldName) {
      case 'title':
        titleValid = value.length >= 5;
        fieldValidationErrors.title = titleValid ? '' : 'should be at least 5 characters.';
        break;
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      titleValid: titleValid,
    }, this.validateForm)
  }

  validateForm() {
    this.setState({
      formValid: this.state.titleValid
    })
  }

  handleOnChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    this.setState(
      {[name]: value},
      () => { this.validateField(name, value)});
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { title } = this.state;
    const cheatData = {
      title: title
    }
    this.props.cheatActions.createCheatSheet(cheatData)
  }

  handleOnCancel = (e) => {
    e.preventDefault();
    const { history } = this.props;
    history.push('/cheats')
  }

  render() {
    console.log("thi props ==>", this.state.title);
    return (
      <form className="add_cheat_form" onClick={this.handleOnSubmit}>
        <TextInput
          placeholder="e.g Configuration"
          label="Title"
          onChange={this.handleOnChange}
        />
        <button
          className='btn btn-success'
          type='submit'
        >Add</button>
        <button
          onClick={this.handleOnCancel}
          type='button'
          className='btn btn-danger'
        >Cancel</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  singleCheat: state.singleCheat
});

const mapDispatchToProps = (dispatch) => ({
  cheatActions: bindActionCreators(cheatActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddCheatSheetForm));

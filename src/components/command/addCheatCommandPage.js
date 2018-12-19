import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as commandActions from '../../actions/commandActions';
import TextInput from '../common/TextInput';
import {FormErrors} from '../common/FormErrors';

class AddCheatCommandPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      command: '',
      descriptionValid: false,
      commandValid: false,
      formValid: false,
      formErrors: {
        description: '',
        command: ''
      }
    };
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let descriptionValid = this.state.descriptionValid
    let commandValid = this.state.commandValid
    switch (fieldName) {
      case 'description':
        descriptionValid = value.length >= 5;
        fieldValidationErrors.title = descriptionValid ?
        '' : 'should be at least 5 characters.';
        break;
      case 'command':
        commandValid = value.length >= 5;
        fieldValidationErrors.title = commandValid ?
        '' : 'should be at least 5 characters.';
        break;
      default:
        break;
    }

    this.setState({
      formErrors: fieldValidationErrors,
      descriptionValid: descriptionValid,
      commandValid: commandValid,
    }, this.validateForm)
  }

  validateForm() {
    this.setState({
      formValid: this.state.descriptionValid &&
      this.state.commandValid
    })
  }

  handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({[name]: value}, () => {
      this.validateField(name, value)
    });
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    const { cheatId } = this.props.match.params;
    const { description, command } = this.state;
    const commandData = {
      description: description,
      command: command
    }

    this.props.commandActions.addCommand(
      commandData,
      cheatId
    )

    this.setState({
      description: '',
      command: ''
    })

    this.props.history.push(
      `/cheats/${cheatId}/commands`
    )
  }

  handleOnCancel = (e) => {
    e.preventDefault();
    const { history } = this.props;
    history.push(
      `/cheats/${this.props.match.params.cheatId}/commands`
    )
  }

  render() {
    const isDisabled = this.state.formValid
    return (
      <form
        className="add_cheat_form"
        onSubmit={this.handleOnSubmit}>
        <FormErrors formErrors={this.state.formErrors} />
        <TextInput
          placeholder="e.g clone repo"
          label="Description"
          name="description"
          onChange={this.handleOnChange}
        />

        <TextInput
          placeholder="e.g git clone url"
          label="Command"
          name="command"
          onChange={this.handleOnChange}
        />

        <button
          className='btn btn-success'
          disabled={!isDisabled}
          type='submit'>Save
        </button>
        <button
          onClick={this.handleOnCancel}
          type='button'
          className='btn btn-danger'><b>X</b>
        </button>
      </form>
    );
  }
}

AddCheatCommandPage.propTypes = {
  singleCheat: PropTypes.object.isRequired,
  commandActions: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  singleCheat: state.singleCheat
});

const mapDispatchToProps = (dispatch) => ({
  commandActions: bindActionCreators(
    commandActions, dispatch
  )
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddCheatCommandPage));

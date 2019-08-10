import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as cheatActions from '../../actions/cheatActions';
import TextInput from '../common/TextInput';
import { FormErrors } from '../common/FormErrors';

export class AddCheatSheetForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
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
		let titleValid = this.state.titleValid;

		switch (fieldName) {
			case 'title':
				titleValid = value.length >= 5;
				fieldValidationErrors.title = titleValid ? '' : 'should be at least 5 characters.';
				break;
			default:
				break;
		}

		this.setState(
			{
				formErrors: fieldValidationErrors,
				titleValid: titleValid
			},
			this.validateForm
		);
	}

	validateForm() {
		this.setState({
			formValid: this.state.titleValid
		});
	}

	handleOnChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({ [name]: value }, () => {
			this.validateField(name, value);
		});
	};

	handleOnSubmit = (e) => {
		e.preventDefault();
		const { title } = this.state;
		const cheatData = { title: title };
		this.props.cheatActions.createCheatSheet(cheatData);
		this.setState({ title: '' });
		this.props.history.push('/cheats');
	};

	handleOnCancel = (e) => {
		e.preventDefault();
		const { history } = this.props;
		history.push('/cheats');
	};

	render() {
		const isDisabled = this.state.formValid;
		return (
			<form className="add_cheat_form" onSubmit={this.handleOnSubmit}>
				<FormErrors formErrors={this.state.formErrors} />
				<TextInput
					placeholder="e.g Configuration"
					label="Title"
					name="title"
					onChange={this.handleOnChange}
					formErrors={this.state.formErrors}
				/>

				<button
					variant="contained"
					color="primary"
					type="submit"
					disabled={!isDisabled}
					className="btn btn-success"
				>
					Add cheat
				</button>
				<button
					variant="contained"
					color="secondary"
					onClick={this.handleOnCancel}
					className="btn btn-danger"
					type="button"
				>
					Cancel
				</button>
			</form>
		);
	}
}

AddCheatSheetForm.propTypes = {
	singleCheat: PropTypes.object.isRequired,
	cheatActions: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	singleCheat: state.singleCheat
});

const mapDispatchToProps = (dispatch) => ({
	cheatActions: bindActionCreators(cheatActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AddCheatSheetForm));

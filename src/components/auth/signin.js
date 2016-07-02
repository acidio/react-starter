import React, { Component } from 'react';
import FacebookLogin from 'react-facebook-login';
import { reduxForm } from 'redux-form';
import * as actions from '../../actions';

class Signin extends Component {
  handleFormSubmit({ email, password }) {
    // Need to do something to log user in
    this.props.signinUser({ email, password });
  }

  responseFacebook(response) {
    console.log(response);
    this.props.signinUser(response);
  }

  renderAlert() {
    if (this.props.errorMessage) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.errorMessage}
        </div>
      );
    }
  }

  render() {
    const { handleSubmit, fields: { email, password }} = this.props;

    return (<div>
        {this.renderAlert()}
        <FacebookLogin
          appId="1027681580659584"
          autoLoad={true}
          fields="name,email,picture"
          callback={this.responseFacebook.bind(this)} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { errorMessage: state.auth.error };
}

export default reduxForm({
  form: 'signin',
  fields: ['email', 'password']
}, mapStateToProps, actions)(Signin);

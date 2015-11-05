import React from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Col, Panel, Alert } from 'react-bootstrap';
import Spinner from '../components/lib/Spinner';
import LoginForm from '../components/Login/LoginForm';
import { login, clearMessage } from '../actions/auth';

class Login extends React.Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.renderMessage = this.renderMessage.bind(this);
  }

  login(username, password) {
    this.props.dispatch(login(username, password));
  }

  componentWillUnmount() {
    this.props.dispatch(clearMessage());
  }

  renderMessage() {

    const { message } = this.props.auth;

    if (message) {
      return (
        <Alert
          bsStyle="danger" >
          {message}
        </Alert>
      );
    }

    return null;
  }

  render() {

    const { isProcessing } = this.props.auth;

    return (
      <div>
        <Spinner show={isProcessing} />
        <Row>
          <Col xs={6}>
            <Panel
              header="Login Page">
              {this.renderMessage()}
              <LoginForm
                login={this.login} />
            </Panel>
          </Col>
        </Row>
      </div>
    );
  }
}

function select(state) {
  return {
    auth: state.auth
  };
}

export default connect(select)(Login);

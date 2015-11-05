import React from 'react';
import { connect } from 'react-redux';
import { pushState } from 'redux-router';

class RequireAuth extends React.Component {

  componentWillMount() {
    if (!this.props.auth.token) {
      this.props.dispatch(pushState(null, `/login?nextPath=${this.props.location.pathname}`));
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default connect((state) => state)(RequireAuth);

import React from 'react';

import { Link, IndexLink } from 'react-router';
import { Grid, Row, Col } from 'react-bootstrap';

export default class App extends React.Component {
  render() {
    return (
      <Grid>
        <div className="main">
          <Row>
            <Col xs={4}>
              <ul>
                <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                <li><Link to="/todo" activeClassName="active">Todo</Link></li>
              </ul>
            </Col>
            <Col xs={8}>
              {this.props.children}
            </Col>
          </Row>
        </div>
      </Grid>
    );
  }
}

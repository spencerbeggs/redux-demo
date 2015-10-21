import React from 'react';
import { render } from 'react-dom';
import { Grid } from 'react-bootstrap';

const App = React.createClass({
  render() {
    return (
      <Grid>Hello Redux!</Grid>
    );
  }
});

render(<App />, document.getElementById('app'));

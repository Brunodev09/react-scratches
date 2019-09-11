import React, {Component, Fragment} from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import * as axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.name = "Brunodev09"
  }

  state = {
    users: [],
    loading: false
  }

  getName = () => this.name;

  async componentDidMount() {
    this.setState({loading: true});
    let req = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}
    &client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    if (req && req.data) this.setState({users: req.data, loading: false});
  }

  render() {

    const str = "Custom Title";
    return (
      <Fragment>
        <Navbar myTitle={str} />
        <Users loading={this.state.loading} users={this.state.users} /> 
        {/* {loading ? <h4>Loading...</h4> : <h1>Hey {this.getName()}!</h1>} */}
      </Fragment>
    );
  }
}

export default App;

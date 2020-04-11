import React from 'react';
import UserCard from './components/UserCard'
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      user:[]
    }
  }

  componentDidMount() {
    console.log('This is CDM in App.js speaking, how are ya??')
    fetch('https://api.github.com/users/tommyconner96')
    .then(res => res.json())
    .then(user =>{
      console.log('user data right here: ', user)
      this.setState({user: user})
    })
    .catch(err => console.log('houston we have a problem (getting the user data): ', err))
  }
  render() {
    return (
      <div>
        <UserCard 
        user={this.state.user}
        />
      </div>

    )
  }

}

export default App;

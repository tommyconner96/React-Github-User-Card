import React from 'react'

class UserCard extends React.Component {

    constructor() {
        super()
        this.state = {
            followers:[]
        }

    }

    componentDidMount() {
        console.log('CDM from UserCard.js checking in!')
        fetch('https://api.github.com/users/tommyconner96/followers')
        .then(res => res.json())
        .then(followers => {
            console.log('behold, follower data: ', followers)
            this.setState({followers:followers})
        })
        .catch(err => console.log('oh no! there was an error getting followers data! here it is:', err))

    }

    render(){
        return(
            <div className='app-container'>
                <h1>Github User Card!</h1>
                <div className='user-container'>
                <div className='user-card'>
                    <img src={this.props.user.avatar_url} alt='github user' />
                    <p>{this.props.user.name}</p>
                    <p>{this.props.user.login}</p>
                    <p>{this.props.user.location}</p>
                    <p>{this.props.user.public_repos} repos</p>
                </div>
                </div>
                <div className='follower-container'>
                    {this.state.followers.map(followers => 
                        <div className='follower-card'>
                            <img src={followers.avatar_url} alt='github user' width='150px' height='150px' />
                            <br />
                            {followers.login}
                            </div>)}
                </div>
            </div>
        )
    }

}
export default UserCard
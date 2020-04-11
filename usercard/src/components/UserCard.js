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
            <div>
                <div>
                    <img src={this.props.user.avatar_url}  />
                    <p>{this.props.user.name}</p>
                    <p>{this.props.user.login}</p>
                    <p>{this.props.user.location}</p>
                    <p>{this.props.user.public_repos} repos</p>
                </div>
                <div>
                    {this.state.followers.map(followers => 
                        <div>{followers.login}</div>)}
                </div>
            </div>
        )
    }

}
export default UserCard
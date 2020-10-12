import React from 'react'

class Main extends React.Component {
    render(){
        return(
            <>
            <form>
                <input placeholder="Username" name="username" required="" type="text" />
                <input placeholder="Password" name="password" required="" type="password" />
                <button type="button" onClick={this.login}>LOG IN</button>
            </form>
            </>
        )
    }
}

export default Main;
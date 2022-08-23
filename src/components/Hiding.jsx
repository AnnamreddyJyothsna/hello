import { Component } from 'react'

class Greeting extends Component {
    state = {
        show: true
    }
    handleClick = () => {
        this.setState({ show: !this.state.show })
    }
    render() {

        return (
            <div >
                {this.state.show && <h1>Hi Jo</h1>}
                <button className={this.state.show ? 'danger' : 'success'} onClick={this.handleClick}>{this.state.show ? "hide" : "show"}</button>
            </div >
        )
    }
}
export default Greeting

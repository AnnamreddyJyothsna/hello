import { Component } from 'react'

class Greeting extends Component {
    handleClick = () => {
        console.log('Hi Jyothsna')
    }
    render() {
        return (
            <div>
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}
export default Greeting

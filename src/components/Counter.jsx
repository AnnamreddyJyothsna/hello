import { Component } from 'react'

class Counter extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }

        this.click = this.click.bind(this)
    }

    click() {
        this.setState({ count: this.state.count + 1 })
    }
    render() {
        return (
            <div>
                <button onClick={this.click}>Click</button>
                <span>{this.state.count}</span>
            </div>
        )
    }
}
export default Counter

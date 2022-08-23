import { Component } from 'react'

class Names extends Component {
    state = {
        currentId: -1,
        text: '',
        list: ['jyo', 'sravani', 'prami', 'deepu'],
    }

    handleClick = (e) => {

        this.setState({ list: this.state.list.filter((item, i) => i !== Number(e.target.id)) })
    }
    onUpdate = (e) => {

        this.setState({ text: this.state.list[e.target.id], currentId: e.target.id })
        // this.setState({ list: this.state.list.map((name, i) => i == (e.target.id) ? 'jyo' : name) })
    }
    onTextChange = (e) => {
        this.setState({ text: e.target.value })

    }

    onAdd = (e) => {


        if (this.state.currentId === -1) {

            this.setState({ list: [...this.state.list, this.state.text] })
        }
        else {

            this.setState({ list: this.state.list.map((name, i) => i == this.state.currentId ? this.state.text : name) })
        }
    }


    addText = (e) => {

        // this.setState({ text:  })
    }

    upArrow = () => {
        this.setState()
    }

    downArrow = () => {

    }

    render() {

        return (
            <div>
                <input type='text' value={this.state.text} onChange={this.onTextChange} placeholder='type something'></input><button onClick={this.onAdd} >Add</button>
                {this.state.list.map((name, i) => <div>{name}<button id={i} onClick={this.handleClick} >delete</button><button id={i} onClick={this.onUpdate}>update</button>
                    <button onClick={this.upArrow}>UpArrow</button> <button onClick={this.downArrow}>DownArrow</button></div>)}
                <button onClick={this.addText}>Test</button>
                <h1>{this.state.currentId}</h1>
            </div>
        )
    }
}
export default Names




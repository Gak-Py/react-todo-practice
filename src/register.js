import React from 'react'
import axios from 'axios'

export default class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            textinput: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.dataInput = this.dataInput.bind(this);
    }

    handleChange(event) {
        this.setState({textinput: event.target.value});
    }

    dataInput(event) {
        const title = this.state.textinput

        axios.post('http://localhost:3000/posts', {title}).then(response => {console.log(response)
        event.preventDefalt();
        })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.dataInput}>
                    <input type="text" name="textinput" onChange={this.handleChange}/>
                    <button type='submit' value="Submit">登録</button>
                </form>
            </div>
        )
    }
}

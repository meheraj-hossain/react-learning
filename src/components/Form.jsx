import React from "react";

export default class Form extends React.Component{
    state = {
        title: '',
        text: '',
        os: '',
        checkbox: 'true'
    }

    changeState = (e) => {
        if (e.target.name === 'title') {
            this.setState({
                title: e.target.value,
            })
        }
        if (e.target.name === 'text-area') {
            this.setState({
                text: e.target.value,
            })
        }
        if (e.target.name === 'os') {
            this.setState({
                os: e.target.value,
            })
        }
        if (e.target.name === 'checkbox') {
            this.setState({
                checkbox: e.target.checked,
            })
        }
    }

    handleSubmit = (e) => {
        const {title, text, os, checkbox} = this.state;
        e.preventDefault();
        console.log(title, text, os, checkbox);

    }

    render() {
       const {title, text, os, checkbox} = this.state;
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="title" placeholder="Enter Title" value={title} onChange={this.changeState} />
                    <br/>
                    <br/>
                    <textarea name="text-area" id="" cols="30" rows="10" value={text} onChange={this.changeState}>
                    </textarea>
                    <br/>
                    <br/>
                    <select name="os" id="" value={os} onChange={this.changeState}>
                        <option value="IOS">IOS</option>
                        <option value="Android">Android</option>
                    </select>
                    <br/>
                    <br/>
                    <input type="checkbox" name="checkbox" checked={checkbox} onChange={this.changeState}/>
                    <br/>
                    <br/>
                    <input type="submit" value="submit"/>
                </form>
            </>
        )
    }
}
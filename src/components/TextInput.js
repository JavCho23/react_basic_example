import React from 'react';

class TextInpunt extends React.Component {
    constructor(props){
        super(props);
        this.changeHandler = this.changeHandler.bind(this);
    }
    render(){
        return (<div className="form-item">
            <label className="form-item__label">{this.props.label}</label>
            <input className="form-item__input" onChange={this.changeHandler} value={this.props.value}/>
        </div>)
    }

    changeHandler(event){
        this.props.onChange(event.target.value);
    }

}

export default TextInpunt;
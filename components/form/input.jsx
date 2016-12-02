import React from 'react'
import {render} from 'react-dom'
import BtnsxSelect from './select.jsx'

export default class BtnsxInput extends React.Component {
    constructor(props) {
        super(props)
        this._handleChange = this._handleChange.bind(this);
        this._increment = this._increment.bind(this);
        this._decrement = this._decrement.bind(this);
    }
    _handleChange(e) {
        // console.log(e.target.value)
        this.props.handleUserInput(e.target.value)
    }
    _increment(e) {
        let val = document.getElementById(this.props.name).value
        this.props.handleUserInput(+val+1)
    }
    _decrement(e) {
        let val = document.getElementById(this.props.name).value
        this.props.handleUserInput(+val-1)
    }
    render() {
        let incrementor = ''
        // console.log(this.props)
        if( this.props.type == 'number' ) {
            incrementor = <span className="btnsx-number">
                <button className="btnsx-increment" onClick={this._increment}><i className="fa fa-caret-up"></i></button>
                <button className="btnsx-decrement" onClick={this._decrement}><i className="fa fa-caret-down"></i></button>
            </span>
        }
        let prefix = ''
        if( this.props.prefix ) {
            prefix = <BtnsxSelect id={this.props.id+'[prefix]'} value={this.props.value} name={this.props.name+'[prefix]'} opts={this.props.prefix} />
        }
        let label = ''
        if( this.props.object.label ) {
            label = <label htmlFor={this.props.name} className="active">{this.props.object.label}</label>
        }
        return (
            <div className="btnsx-input btnsx-input-prefix input-field" style={{width:this.props.object.width}}>
                {label}
                <input type={this.props.type} id={this.props.name} name={this.props.name} placeholder={this.props.value} value={this.props.value} onChange={this._handleChange} ref={this.props.name} />
                <span className="btnsx-prefix-wrap">
                    {incrementor}
                    {prefix}
                </span>
            </div>
        )
    }
}
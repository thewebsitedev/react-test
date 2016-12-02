import React from 'react'
import {render} from 'react-dom'

export default class BtnsxView extends React.Component {
    constructor(props) {
        super(props)
        this.updateView = this.updateView.bind(this)
    }
    updateView() {
        this.props.view(this.props.item.id)
    }
    render() {
        return (
            <li>
                <input type="radio" id={this.props.item.id} name="view" value={this.props.item.value} defaultChecked={this.props.item.active} onChange={this.updateView} />
                <label htmlFor={this.props.item.id}>{this.props.item.name}{this.props.item.active}</label>
                <div className="check" />
            </li>
        )
    }
}

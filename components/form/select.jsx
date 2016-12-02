import React from 'react'
import {render} from 'react-dom'

export default class BtnsxSelect extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        // console.log(this.props.name)
        const optionKey = this.props.name
        return (
            <select key={this.props.name+'-key'} name={this.props.name}>
            {
                this.props.opts.map(function(item, i) {
                    return (
                        <option key={optionKey+'-'+item} value={item}>{item}</option>
                    )
                })
            }
            </select>
        )
    }
}
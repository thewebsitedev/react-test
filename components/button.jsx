import React from 'react'
import {render} from 'react-dom'

export default class BtnsxButton extends React.Component {
    constructor(props) {
        super(props)
        this._get_content = this._get_content.bind(this)
    }
    _get_content() {
        let text = []
        const options = this.props.options
        for (var i = options.length - 1; i >= 0; i--) {
            const optns = options[i].content
            for (var j = optns.length - 1; j >= 0; j--) {
                // console.log(optns[j])
                const optn = optns[j]
                for (var k = optn.length - 1; k >= 0; k--) {
                    if( optn[k].id == "text" ){
                        // console.log('works')
                        const key = this.props.view + "-" + this.props.state + "-" + optn[k].id + "-" + j
                        let clas = "btnsx-content btnsx-content-"+this.props.view + " btnsx-content-" + this.props.state + " " + optn[k].class
                        text.push(<span key={key} className={clas}>{optn[k].value}</span>)
                    }
                }
            }
        }
        return text
    }
    render() {
        return (
            <a href="javascript:void(0)" className="btnsx-btn">
                {this._get_content()}
            </a>
        )
    }
}

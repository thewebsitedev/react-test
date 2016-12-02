import React from 'react'
import BtnsxInput from './form/input.jsx'
import update from 'immutability-helper'

export default class BtnsxToggle extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            active: true
        }
        this._handleUserInput = this._handleUserInput.bind(this)
        this._handleToggle = this._handleToggle.bind(this)
    }
    _handleUserInput(view,optIdx,optHead,grpIdx,feArrIdx,feIdx,val) {
        // console.log('looggg:'+view)
        this.props.handleUserInput(val,view,optIdx,optHead,grpIdx,feArrIdx,feIdx)
    }
    _handleToggle() {
        let state = this.state;
        state = update(state, {
            active: {$set: this.state.active ? false : true }
        });
        this.setState(state)
    }
    render() {
        let activeView = {}
        const structure = this.props.state.structure
        for (var i = structure.length - 1; i >= 0; i--) {
            if(structure[i].active==true){
                activeView = structure[i].states
            }
        }
        const activeViewArr = Object.keys(activeView).map(function (key) { return activeView[key]; });
        // console.log(activeViewArr)
        let options = activeViewArr.map((item, i)  => {
            let toggle = []
            let option = []
            let value = []
            // console.log(item)
            if(item.active==true) {
                // console.log(item.id)
                for (var j = item.options.length - 1; j >= 0; j--) {
                    // console.log('j:'+j)
                    for (var key in item.options[j]) {
                        if (item.options[j].hasOwnProperty(key)) {
                            // console.log('key: '+key)
                            // console.log(key + " -> " + item.options[j][key]);
                            let heading = key.match(/([A-Z]?[^A-Z]*)/g).join(' ')
                            let toggle_body = []
                            let toggle_body_icon = 'btnsx-toggle-body'
                            let toggle_icon = 'dashicons dashicons-arrow-right'
                            if ( this.state.active == true ) {
                                toggle_body_icon = 'btnsx-toggle-body active'
                                toggle_icon = 'dashicons dashicons-arrow-down'
                                for (var yek in item.options[j][key]) {
                                    // console.log('yek: '+yek)
                                    let arr = item.options[j][key][yek]
                                    for (var ke in arr) {
                                        // console.log('ke: '+ke)
                                        const field = arr[ke]
                                        // console.log(field)
                                        let fieldset = []
                                        if ( this.state.active == true ) {
                                            if ( field.length ) {
                                                let fieldset_body = []
                                                for (var fe in field) {
                                                    // console.log('fe: '+fe)
                                                    fieldset_body.push(<BtnsxInput key={field[fe].id+'-'+fe} type={field[fe].type} prefix={field[fe].prefix_options} name={field[fe].id} value={field[fe].value} object={field[fe]} icon={field[fe].icon} handleUserInput={this._handleUserInput.bind(this, item.id, j, key, yek, ke, fe)} />)
                                                }
                                                fieldset.push(<div className="btnsx-fieldset">{fieldset_body}</div>)
                                            } else {
                                                if( field.type == 'number' || field.type == 'text' ) {
                                                    toggle_body.push(<BtnsxInput key={field.id} type={field.type} prefix={field.prefix_options} name={field.id} value={field.value} object={field} icon={field.icon} handleUserInput={this._handleUserInput.bind(this, item.id, j, key, yek, ke, false)} />)
                                                }
                                            }
                                        }
                                        if ( field.length ) {
                                            option.push(fieldset)
                                        } else {
                                            option.push(toggle_body)
                                        }
                                    }
                                }
                            }
                            toggle.push(
                                <div className="btnsx-toggle" key={'btnsx-toggle-'+key}>
                                    <div className="btnsx-toggle-head" onClick={this._handleToggle}>
                                        <span className={toggle_icon}></span>
                                        {heading}
                                    </div>
                                    <div className={toggle_body_icon}>
                                        {option}
                                    </div>
                                </div>
                            )
                        }
                    }
                    value.push(toggle)
                }
                return value
            }
        })

        const $this = this;
        return (
            <div>
                {
                    options
                }
            </div>
        )
    }
}

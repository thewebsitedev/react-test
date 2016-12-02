import React from 'react'
import {render} from 'react-dom'
import update from 'immutability-helper'
import BtnsxInput from './components/form/input.jsx'
import BtnsxView from './components/view.jsx'
import BtnsxStates from './components/states.jsx'
import BtnsxToggle from './components/toggle.jsx'
import Radium, { Style } from 'radium'

require('./admin.scss')

class Btnsx extends React.Component {
    constructor(props) {
        super(props);
        this.state = btnsxStructure;
        this.updateView = this.updateView.bind(this);
        this.updateState = this.updateState.bind(this);
        this._setActiveState = this._setActiveState.bind(this);
        this._userInput = this._userInput.bind(this);
        this._setButtonStyle = this._setButtonStyle.bind(this);
    }
    showOptions(item, e){
        let className = e.target.className;
        if ( ~className.indexOf('btnsx-preview') ) {
            if ( ~className.indexOf(' active') ) {
                className = className.replace(' active', '');
            } else {
                var elms = document.getElementsByClassName('btnsx-preview')
                for(var i = 0; i < elms.length; i++) {
                    elms[i].className = className;
                }
                className += ' active';
            }
        }
        e.target.className = className
    }
    updateView(id) {
        // Normal
        // for (var i = this.state.structure.length - 1; i >= 0; i--) {
        //     this.state.structure[i].active = this.state.structure[i].id == id
        // }
        // this.forceUpdate()
        // this.updateState(id)
        
        // Immutability Helper
        var state = this.state;
        for (var i = state.structure.length - 1; i >= 0; i--) {
          state = update(state, {
            structure: {
              [i]: {
                active: {$set: state.structure[i].id == id}
              }
            }
          });
        }
        this.setState(state)
        this.updateState(id)
    }
    updateState(id) {
        return id
    }
    componentDidMount() {
        document.getElementById('btnsx-preview').style.display = 'block'
    }
    _setActiveState(id) {
        // console.log('handler: '+id)
        const structure = this.state.structure
        let state = this.state;
        for (var i = structure.length - 1; i >= 0; i--) {
            // console.log(i)
            if(structure[i].active==true){
                // console.log(structure[i].states)
                const activeViewArr = Object.keys(structure[i].states).map(function (key) { return structure[i].states[key]; });
                // console.log(activeViewArr)
                for (var j = activeViewArr.length - 1; j >= 0; j--) {
                    const prop = activeViewArr[j].id
                    const bool = prop == id
                    // console.log(prop + ' = ' + id + ' : ' + bool )
                    state = update(state, {
                        structure: {
                            [i]: {
                                states: {
                                    [prop]: {
                                        active: {$set: bool}
                                    }
                                }
                            }
                        }
                    });
                }
            }
        }
        this.setState(state)
    }
    _getViews() {
        const structure = this.state.structure
        let state = this.state;
        let views = []
        for (var i = structure.length - 1; i >= 0; i--) {
            // console.log(i)
            if(structure[i].active==true){
                // console.log(structure[i].states)
                const activeViewArr = Object.keys(structure[i].states).map(function (key) { return structure[i].states[key]; });
                views = activeViewArr
            }
        }
        return views
    }
    _getViewOptions(view) {
        // console.log(view.options)
        return view.options
    }
    _userInput(val,view,optIdx,optHead,grpIdx,feArrIdx,feIdx){
        // console.log('User Input: '+optIdx)
        const structure = this.state.structure
        let state = this.state;
        for (var i = structure.length - 1; i >= 0; i--) {
            // console.log(i)
            if(structure[i].active==true){
                // console.log(structure[i].states)
                const activeViewArr = Object.keys(structure[i].states).map(function (key) { return structure[i].states[key]; });
                // console.log(activeViewArr)
                for (var j = activeViewArr.length - 1; j >= 0; j--) {
                    const prop = activeViewArr[j].id
                    // console.log(prop)
                    // console.log(view)
                    if( prop == view ) {
                        // console.log(optHead)
                        // console.log(grpIdx)
                        // console.log(feIdx)
                        if( feIdx ){
                            state = update(state, {
                            structure: {
                                [i]: {
                                    states: {
                                        [prop]: {
                                            options: {
                                                [optIdx]: {
                                                    [optHead]: {
                                                        [grpIdx]: {
                                                            [feArrIdx]: {
                                                                [feIdx]: {
                                                                    value: {
                                                                        $set: val
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        })
                        } else {
                            state = update(state, {
                                structure: {
                                    [i]: {
                                        states: {
                                            [prop]: {
                                                options: {
                                                    [optIdx]: {
                                                        [optHead]: {
                                                            [grpIdx]: {
                                                                [feArrIdx]: {
                                                                    value: {
                                                                        $set: val
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            })
                        }
                    }
                }
            }
        }
        this.setState(state)
    }
    _setButtonStyle() {
        let style = {}
        let views = this._getViews()
        // console.log(views)
        for (var i = views.length - 1; i >= 0; i--) {
            if( views[i].active ){
                let view = this._getViewOptions(views[i])
                // console.log(view)
                if(view && view.length){
                    for (var i = view.length - 1; i >= 0; i--) {
                        let text = view[i].content // @TODO - make dynamic
                        // console.log(text)
                        for (var j = text.length - 1; j >= 0; j--) {
                            let options = text[j]
                            for (var i = options.length - 1; i >= 0; i--) {
                                if( options[i].css ){
                                    style[options[i].id] = options[i].value + options[i].prefix
                                }
                                if( options[i].length ){
                                    for (var j = options[i].length - 1; j >= 0; j--) {
                                        style[options[i][j].id] = options[i][j].value + options[i][j].prefix
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        // console.log(style)
        return style
    }
    render() {
        let { viewz } = this.props
        let output = ''
        const $this = this;
        return (
            <div className="btnsx-row">
                <div className="btnsx-col s6">
                    <div id="btnsx-preview">
                        <Style scopeSelector=".btnsx-btn" rules={$this._setButtonStyle()} />
                        <div className="btnsx-preview-container" style={{display:'block'}}>
                            <ul className="btnsx-views">
                            {
                                $this.state.structure.map(function(item, i) {
                                    // console.log(item)
                                    return (
                                        <BtnsxView key={item.id} item={item} view={$this.updateView} />
                                    )
                                })
                            }
                            {
                                $this.state.structure.map(function(item, i) {
                                    // console.log(item.active)
                                    if( item.active == true ){
                                        return(<span key={item.id+'-current-view'} style={{color:'#e9e9e9',fontSize:'12px',float:'right'}}>{item.name} View</span>)
                                    }
                                })
                            }
                            </ul>
                            {
                                <BtnsxStates state={$this.state} handler={$this._setActiveState} />
                            }
                        </div>
                    </div>
                </div>
                <div className="btnsx-col s6 btnsx-options-wrapper">
                    <div id="btnsx-options" className="btnsx-options">
                        {
                            <BtnsxToggle state={$this.state} handler={$this._setActiveOptions} handleUserInput={$this._userInput} />
                        }
                    </div>
                </div>
            </div>
        )
    }
}

render(<Btnsx />, document.getElementById('btnsx-body'))

// require('./components/js/global.js')
// require('./components/js/webfontloader.js')
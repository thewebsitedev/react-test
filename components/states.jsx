import React from 'react'
import {render} from 'react-dom'
import BtnsxButton from './button.jsx'

export default class BtnsxStates extends React.Component {
    constructor(props) {
        super(props);
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
        let states = activeViewArr.map((item, i)  => {
            // console.log(item)
            let key = item.id + '-' + item.parent + '-button'
            let className = 'btnsx-preview btnsx-preview-'+item.parent + ' btnsx-preview-'+item.id
            let stateClassName = 'btnsx-state-label '+item.id
            if( item.active ){
                className += ' active'
            }
            return (
                <div className={className} key={item.id} onClick={this.props.handler.bind(this, item.id)}>
                    <span className={stateClassName}>{item.id}</span>
                    <BtnsxButton key={key} view={item.parent} state={item.id} values={item.id} options={item.options} />
                </div>
            )
        })
        return (
            <div>
            {
                states
            }
            </div>
        )
    }
}

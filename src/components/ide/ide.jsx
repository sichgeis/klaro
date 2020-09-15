import React from 'react'
import {Close} from '../icons'
import Spec from './spec'
import * as Controls from './controls'

export class IDEModal extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            hidden: false
        }
    }

    render() {

        const {config, t, lang} = this.props
        const {stylePrefix} = config
        const {hidden} = this.state

        const hide = (e) => {
            e.preventDefault()
            this.setState({hidden: true})
        }

        const show = (e) => {
            e.preventDefault()
            this.setState({hidden: false})
        }

        if (hidden)
            return <div><a href="#" onClick={show}>open me</a></div>

        return <div className={stylePrefix || 'klaro'}>
                <div className="cookie-modal">
                <div className="cm-bg" onClick={hide}/>
                <div className="cm-modal cm-ide">
                    <div className="cm-header">
                        <button
                            title={t(['close'])}
                            className="hide"
                            type="button"
                            onClick={hide}>
                            <Close t={t} />
                        </button>
                        <h1 className="title">{t(['consentModal', 'title'])}</h1>
                        Test
                    </div>
                    <div className="cm-body">
                        <IDE />
                    </div>
                    <div className="cm-footer">
                        <div className="cm-footer-buttons">
                            Buttons
                        </div>
                        <p className="cm-powered-by"><a target="_blank" href={config.poweredBy || 'https://kiprotect.com/klaro'} rel="noopener noreferrer">{t(['poweredBy'])}</a></p>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default class IDE extends React.Component {
    /*
    Three sections:

    - Globals
    - Translations
    - Apps
      - Locals
      - 
    */
    render(){
        const { className } = this.props
        const controls = Spec.globals.map(globalField => {
            const ClassName = Controls[globalField.control]
            return <ClassName key={globalField.name} field={globalField} {...(globalField.controlProps || {})} />
        })
        console.log(Object.keys(Controls))
        return <div className={className || "klaro-ide"}>
            {controls}
        </div>
    }
}

export class GlobalSettings extends React.Component {

}
import React, { Component } from 'react'
import popupsStore from '../../Stores/popups.store'
import { close as closePopUp } from '../../actions/popups.action'

class PopUp extends Component {

  constructor(props) {
    super(props)

    this.state = {
      popUp: popupsStore.create((Math.random() * 100).toString(36))
    }
  }

  componentDidMount() {
    popupsStore.on('changes', () => {
      console.log(popupsStore.getState(this.state.popUp.id))
      this.setState({ popUp: popupsStore.getState(this.state.popUp.id) })
    })
  }

  componentWillUnmount() {
    popupsStore.removeAllListeners()
  }

  close(e = false) {
    if (e.target === e.currentTarget || e === false) {
      closePopUp(this.state.popUp.id)
    }
  }

  render() {

    return (
      <div onClick={e => this.close(e)} className="pop-up" hidden={this.state.popUp.state.hidden}>
        <div style={this.props.styles} className={'window card col-md-6 col-sm-11 ' + this.props.cssClasses}>
          {this.props.children}
        </div>

      </div >
    )
  }
}

export default PopUp

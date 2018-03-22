import React, { Component } from 'react'
import popupsStore from '../../Stores/popups.store'
import { close as closePopUp } from '../../actions/popups.action'

class PopUp extends Component {

  constructor(props) {
    super(props)

    this.state = popupsStore.create()
  }

  componentDidMount() {
    popupsStore.on('changes', () => {
      this.setState({ ...popupsStore.getState(this.state.id) })
    })
  }

  componentWillUnmount() {
    popupsStore.removeAllListeners()
  }

  close(e = false) {
    if (e.target === e.currentTarget || e === false) {
      closePopUp(this.state.id)
    }
  }

  render() {

    return (
      <div onClick={e => this.close(e)} className="pop-up" hidden={this.state.hidden}>
        <div style={this.props.styles} className={'window card col-md-6 col-sm-11 ' + this.props.cssClasses}>
          {this.props.children}
        </div>

      </div >
    )
  }
}

export default PopUp

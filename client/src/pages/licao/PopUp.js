import React, { Component } from 'react'
import popUpStore from '../../Stores/popup.store'
import { close as closePopUp } from '../../actions/popup.action'

class PopUp extends Component {

  constructor(props) {
    super(props)

    this.state = {
      popUp: popUpStore.getState()
    }
  }

  componentDidMount() {
    popUpStore.on('changes', () => this.setState({ popUp: popUpStore.getState() }))
  }

  componentWillUnmount() {
    popUpStore.removeAllListeners()
  }

  close(e = false) {
    if (e.target === e.currentTarget || e === false) {
      closePopUp()
    }
  }

  render() {

    return (
      <div onClick={e => this.close(e)} className="pop-up" hidden={this.state.popUp.hidden}>
        <div className='window card col-md-6 col-sm-11'>
          {this.props.children}
        </div>

      </div >
    )
  }
}

export default PopUp

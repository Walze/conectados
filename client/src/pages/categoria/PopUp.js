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

  close(e = false) {
    if (e.target === e.currentTarget || e === false)
      closePopUp()
  }

  handleChange(e) {
    let popUp = Object.assign({}, this.state.popUp)
    popUp.fields[e.target.name] = e.target.value

    this.setState({ popUp })
  }

  componentDidMount() {
    popUpStore.on('changes', () => {
      this.setState({ popUp: popUpStore.getState() })
    })
  }

  componentWillUnmount() {
    popUpStore.removeAllListeners()
  }

  render() {
    const inputs = []

    for (let prop in this.state.popUp.fields) {
      if (prop !== 'id')
        inputs.push(
          <input
            type="text"
            className="form-control"
            key={prop}
            name={prop}
            onChange={(e) => this.handleChange(e)}
            value={this.state.popUp.fields[prop]}
          />
        )
    }

    return (
      <div onClick={e => this.close(e)} className="pop-up" hidden={this.state.popUp.hidden}>
        <div className='window col-md-6 col-sm-11'>
          <h4>Editar/Deletar</h4>

          <br />

          <div className="form-group">

            {inputs}

            <br />

            <button type="submit" className="col-md-12 btn btn-success">Alterar</button>
            <button type="submit" className="col-md-12 btn btn-danger">Remover</button>
          </div>
        </div>

      </div>
    )
  }
}

export default PopUp

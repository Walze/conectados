import React, { Component } from 'react'
import PopUp from './PopUp'
import * as popUp from '../../actions/popup.action'


class Licoes extends Component {

  constructor() {
    super()


    this.state = {
      currentLicao: null
    }
  }

  updateCurrentLicao(currentLicao) {
    this.setState({ currentLicao })
    popUp.open()
  }

  render() {

    return (
      <div>
        <div className='cards d-flex flex-wrap'>
          {this.props.licoes.map(licao =>
            <div
              key={licao.titulo}
              className="card m-4 pointer list-group-item-action"
              style={{ width: '320px' }}
              onClick={() => this.updateCurrentLicao(licao.titulo)}
            >
              <div className="card-body">
                <h5 className="card-title text-center mb-2 font-weight-bold">
                  {licao.titulo}
                </h5>
                <p className="card-text">{licao.desc}</p>

              </div>
              <div className="card-footer">
                <small className="text-muted">{licao.categoria_id}</small>
              </div>
            </div>
          )}
        </div>

        <PopUp>
          currentLicao: {this.state.currentLicao}
        </PopUp>
      </div >
    )
  }
}

export default Licoes

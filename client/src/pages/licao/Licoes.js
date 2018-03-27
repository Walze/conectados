import React, { Component } from 'react'
import PopUp from './PopUp'
import Cards from './Cards'
import * as popUp from '../../actions/popups.action'


class Licoes extends Component {

  constructor() {
    super()


    this.state = {
      currentLicao: {
        titulo: "",
        desc: "",
        categoria_id: ""
      }
    }

    window.licoes = this
  }

  updateCurrentLicao(currentLicao) {
    this.setState({ currentLicao })
    popUp.open(this.cardsPopup.state.id)
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
              onClick={() => this.updateCurrentLicao(licao)}
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

        <PopUp ref={ref => this.cardsPopup = ref} cssClasses={'col-md-11 overflow'}>
          <Cards licao={this.state.currentLicao} />
        </PopUp>
      </div >
    )
  }
}

export default Licoes

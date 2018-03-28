import React, { Component } from 'react'
import PopUp from './PopUp'
import Licao from './Licao'
import * as popUp from '../../actions/popups.action'
import * as licoesAction from '../../actions/licoes.action'
import licoesStore from '../../Stores/licoes.store'

class Licoes extends Component {

  constructor() {
    super()

    this.state = {
      licoes: licoesStore.get(),
      activeLicao: {
        titulo: "",
        desc: "",
        categoria_id: "",
        cards: []
      },

    }

  }

  componentDidMount() {
    licoesStore.on('changes', () => {
      this.setState({ licoes: licoesStore.get() })
    })
  }

  componentWillUnmount() {
    licoesStore.removeAllListeners()
  }

  setActiveLicao(activeLicao) {
    this.setState({ activeLicao })
    popUp.open(this.cardsPopup.state.id)
  }

  render() {

    return (
      <div>
        <div className='cards d-flex flex-wrap'>
          {this.state.licoes.map(licao =>
            <div
              key={licao.titulo}
              className="card m-4 pointer list-group-item-action"
              style={{ width: '320px' }}
              onClick={() => this.setActiveLicao(licao)}
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
          <Licao licao={this.state.activeLicao} />
        </PopUp>
      </div >
    )
  }
}

export default Licoes

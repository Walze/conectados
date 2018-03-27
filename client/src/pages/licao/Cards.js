import React, { Component } from 'react'
import PopUp from './PopUp'
import Card from './Card'
import * as popUp from '../../actions/popups.action'
import { makeid } from '../../Helpers'

class Cards extends Component {

  constructor() {
    super()

    this.state = {
      currentCard: {},
      editNome: false,
      cards: [
        { id: 1, text: makeid(Math.floor(Math.random() * (200 - 100 + 1)) + 100), image: '', pos: 1 },
        { id: 2, text: makeid(Math.floor(Math.random() * (200 - 100 + 1)) + 100), image: '', pos: 2 },
        { id: 3, text: makeid(Math.floor(Math.random() * (200 - 100 + 1)) + 100), image: '', pos: 3 },
        { id: 4, text: makeid(Math.floor(Math.random() * (200 - 100 + 1)) + 100), image: '', pos: 4 },
        { id: 5, text: makeid(Math.floor(Math.random() * (200 - 100 + 1)) + 100), image: '', pos: 5 },
        { id: 6, text: makeid(Math.floor(Math.random() * (200 - 100 + 1)) + 100), image: '', pos: 6 },
      ]
    }
  }

  openCard(el) {
    this.setState({ currentCard: el })
    popUp.open(this.cardPopup.state.id)
  }

  editNome() {
    this.setState({ editNome: !this.state.editNome }, () => this.refs.nomeInput.focus())
  }

  render() {
    return (
      <div>
        <br />

        <div className='d-flex flex-wrap justify-content-center'>
          <div style={{ width: '320px' }} className='mx-4 my-3 d-flex flex-wrap justify-content-center flex-column'>
            <h1
              // ref={ref => this.nomeH1 = ref}
              onClick={() => this.editNome()}
              hidden={this.state.editNome}
              className='display-4 text-center'>
              {this.props.licao.titulo}
            </h1>

            <input
              ref='nomeInput'
              onBlur={() => this.editNome()}
              hidden={!this.state.editNome}
              className='form-control form-control-lg display-4 text-center'
              value={this.props.licao.titulo}
            />

            <small hidden={this.state.editNome} className='text-secondary text-center'>
              <i> Clique no nome para editar, depois clique fora do campo para salvar. </i>
            </small>
          </div>

          {this.state.cards.map((card, i) =>
            <div
              key={i}
              className="card mx-4 my-3 pointer list-group-item-action"
              style={{ width: '320px' }}
              onClick={() => this.openCard(card)}
            >
              <div className="card-header text-center font-weight-bold">
                Card #{card.id}
              </div>
              <div className="card-body d-flex align-items-center">
                <p className="card-text">{card.text}</p>
              </div>

            </div>
          )}

        </div>
        <div className='d-flex flex-wrap justify-content-center'>
          <div style={{ width: '320px' }} className='d-flex flex-wrap justify-content-center flex-column'>
            <button className='btn btn-danger'>Deletar</button>
          </div>
        </div>

        <PopUp ref={ref => this.cardPopup = ref}>
          <Card card={this.state.currentCard} />
        </PopUp>

        <br />
      </div>
    )
  }
}

export default Cards

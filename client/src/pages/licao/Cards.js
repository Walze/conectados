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
      cards: [
        { id: 1, text: makeid(Math.floor(Math.random() * (200 - 100 + 1)) + 100), image: '' },
        { id: 2, text: makeid(Math.floor(Math.random() * (200 - 100 + 1)) + 100), image: '' },
        { id: 3, text: makeid(Math.floor(Math.random() * (200 - 100 + 1)) + 100), image: '' },
        { id: 4, text: makeid(Math.floor(Math.random() * (200 - 100 + 1)) + 100), image: '' },
        { id: 5, text: makeid(Math.floor(Math.random() * (200 - 100 + 1)) + 100), image: '' },
        { id: 6, text: makeid(Math.floor(Math.random() * (200 - 100 + 1)) + 100), image: '' },
      ]
    }
  }

  openCard(el) {
    this.setState({ currentCard: el })
    popUp.open(this.cardPopup.state.id)
  }

  render() {
    return (
      <div>
        <br />

        <div className='d-flex flex-wrap justify-content-center'>
          <div style={{ width: '320px' }} className='mx-4 my-3 d-flex flex-wrap justify-content-center flex-column'>
            <h1 className='display-4 text-center'>{this.props.licao.titulo}</h1>
          </div>

          {this.state.cards.map((card, i) =>
            <div
              key={i}
              className="card mx-4 my-3 pointer list-group-item-action"
              style={{ width: '320px' }}
              onClick={() => this.openCard(card)}
            >
              <div className="card-header text-center font-weight-bold">
                Card #{i + 1}
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

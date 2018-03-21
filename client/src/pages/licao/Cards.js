import React, { Component } from 'react'
import PopUp from './PopUp'
import * as popUp from '../../actions/popup.action'


class Cards extends Component {

  constructor() {
    super()


    this.state = {
      currentCard: 1
    }
  }

  updateCurrentCard(currentCard) {
    this.setState({ currentCard })
    popUp.open()
  }

  render() {

    return (
      <div>
        <div className='cards d-flex flex-wrap'>
          {this.props.cards.map(card =>
            <div
              key={card.titulo}
              className="card m-4 pointer list-group-item-action"
              style={{ width: '320px' }}
              onClick={() => this.updateCurrentCard(card.titulo)}
            >
              <div className="card-body">
                <h5 className="card-title text-center mb-2 font-weight-bold">
                  {card.titulo}
                </h5>
                <p className="card-text">{card.desc}</p>

              </div>
              <div className="card-footer">
                <small className="text-muted">{card.categoria_id}</small>
              </div>
            </div>
          )}
        </div>

        <PopUp>
          currentCard: {this.state.currentCard}
        </PopUp>
      </div >
    )
  }
}

export default Cards

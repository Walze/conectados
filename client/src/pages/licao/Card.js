import React, { Component } from 'react'
import { Card as CardInterface } from '../../interfaces'

class Card extends Component {

  constructor(props) {
    super(props)

    this.updateCard = new CardInterface()
  }

  change(e) {
    this.updateCard[e.target.name] = e.target.value

    this.forceUpdate()
  }

  render() {
    if (this.updateCard.id != 0 && this.props.card.id !== this.updateCard.id)
      this.updateCard = Object.assign({}, this.props.card)

    return (
      <div >
        <h4 className='text-center mb-2'>
          <b>
            Card #{this.updateCard.id}
          </b>
        </h4>

        <img src={this.updateCard.images[0]} className='col-sm-12' />

        <textarea onChange={e => this.change(e)} name='text' value={this.updateCard.text} rows='4' className='form-control'></textarea>

        <div className='mt-4'>
          <b>Tocar de Posição</b>

          <div className='form-group'>
            <input type='number' className='form-control' placeholder='Digite o número do card que deseja trocar de posição com esse' />

            <div className="d-flex justify-content-between p-1">
              <button className='btn btn-primary'>Salvar</button>
              <button className='btn btn-danger'>Deletar</button>
            </div>
          </div>

        </div>
      </div >
    )
  }
}

export default Card

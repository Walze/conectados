import React from 'react'
import { Card as CardInterface } from '../../interfaces'
import * as CardActions from "../../actions/cards.action";

class Card extends React.Component {

  constructor(props) {
    super(props)

    this.updateCard = new CardInterface()

    this.state = {
      swap: {
        licao_id: 0,
        from: 0,
        to: 0
      }
    }

    window.card = this
  }

  changeUpdate(e) {
    this.updateCard[e.target.name] = e.target.value

    this.forceUpdate()
  }

  swapChange(e) {
    let swap = Object.assign({}, this.state.swap)
    swap.from = this.props.card.pos
    swap.licao_id = this.props.card.licao_id

    swap[e.target.name] = Number(e.target.value)

    this.setState({ swap })
  }

  save() {
    CardActions.updateCard(this.updateCard)
    CardActions.swapPos(this.state.swap)
    this.props.closePopUp()
  }

  remove() {
    CardActions.deleteCard(this.updateCard)
    this.props.closePopUp()
  }

  render() {
    const condition =
      this.props.card.id !== 0 &&
      (
        this.props.card.id !== this.updateCard.id ||
        this.props.card.licao_id !== this.updateCard.licao_id
      )

    if (condition)
      this.updateCard = Object.assign({}, this.props.card)

    return (
      <div>
        <h4 className='text-center mb-2'>
          <b>
            Card #{this.updateCard.pos}
          </b>
        </h4>

        <img src={this.updateCard.images[0]} className='col-sm-12' alt='' />

        <textarea onChange={e => this.changeUpdate(e)} name='text' value={this.updateCard.text} rows='4' className='form-control'></textarea>

        <div className='mt-4'>
          <b>Tocar de Posição</b>

          <div className='form-group'>
            <input name='to' onChange={e => this.swapChange(e)} type='number' className='form-control' placeholder='Digite o número do card que deseja trocar de posição com esse' />

            <div className="d-flex justify-content-between p-1">
              <button onClick={() => this.save()} className='btn btn-primary'>Salvar</button>
              <button onClick={() => this.remove()} className='btn btn-danger'>Deletar</button>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default Card

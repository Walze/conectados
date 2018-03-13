import React, { Component } from 'react'
import * as actions from '../../actions/popup.action'

class ListItem extends Component {

  render() {

    return (
      <a
        onClick={() => actions.updateFields(this.props.categoria)}
        className='list-group-item list-group-item-action'>
        {this.props.categoria.nome}
      </a>
    )
  }
}

export default ListItem

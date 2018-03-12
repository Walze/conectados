import React, { Component } from 'react'


class ListItem extends Component {

  render() {

    return (
      <a
        onClick={() => this.props.popUp.show(this.props.categoria)}
        className='list-group-item list-group-item-action'>
        {this.props.categoria.nome}
      </a>
    )
  }
}

export default ListItem

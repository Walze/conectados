import React, { Component } from 'react'


class Licao extends Component {
  constructor(props) {
    super(props);

    props.displayNav(true)
  }

  render() {

    return (
      <div>
        <h1>Licao</h1>
        <p>{this.props.children}</p>
        <p>{this.props.navHidden}</p>
      </div>
    )
  }
}

export default Licao

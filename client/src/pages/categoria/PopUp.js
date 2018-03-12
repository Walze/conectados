import React, { Component } from 'react'


class PopUp extends Component {

  constructor(props) {
    super(props)


    this.state = {
      hidden: true,
      fields: {}
    }
  }

  show(fields) {

    this.setState({ fields, hidden: false })
  }

  close(e = false) {
    if (e.target === e.currentTarget || e === false)
      this.setState({ hidden: true })
  }

  handleChange(e) {
    let fields = Object.assign({}, this.state.fields)
    fields[e.target.name] = e.target.value

    this.setState({ fields })
  }

  render() {
    const inputs = []

    for (let prop in this.state.fields) {
      if (prop !== 'id')
        inputs.push(
          <input type="text" className="form-control" key={prop} name={prop} onChange={(e) => this.handleChange(e)} value={this.state.fields[prop]} />
        )
    }

    return (
      <div onClick={e => this.close(e)} className="pop-up" hidden={this.state.hidden}>
        <div className='window col-md-6 col-sm-11'>
          <h4>Editar/Deletar</h4>

          <br />

          <div className="form-group">

            {inputs}

            <br />

            <button type="submit" className="col-md-12 btn btn-success">Alterar</button>
            <button type="submit" className="col-md-12 btn btn-danger">Remover</button>
          </div>
        </div>

      </div>
    )
  }
}

export default PopUp

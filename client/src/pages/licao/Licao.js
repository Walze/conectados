import React, { Component } from 'react'
import Cards from './Cards'

import * as popUp from '../../actions/popups.action'
import * as LicoesActions from '../../actions/licoes.action'
import PopUp from './PopUp'

import { Card, Licao as LicaoInterface } from '../../interfaces'
import { add as addCard } from '../../actions/cards.action'

class Licao extends Component {

	constructor(props) {
		super(props)
		this.state = {
			newCard: new Card(),
			editNomeBool: false,
			edit: new LicaoInterface(),
			editDefault: new LicaoInterface()
		}

		window.licao = this
	}

	handleChange(e, index = null) {
		let newCard = Object.assign({}, this.state.newCard)

		if (e.target.name !== 'images')
			newCard[e.target.name] = e.target.value
		else
			newCard[e.target.name][index] = e.target.value

		newCard.licao_id = this.props.licao.id
		newCard.pos = this.props.licao.cards.length + 1

		this.setState({ newCard })
	}

	createCard() {
		addCard(this.state.newCard)
	}

	edit(e) {
		const edit = Object.assign({}, this.state.edit)
		edit[e.target.name] = e.target.value
		this.setState({ edit })
	}

	editNomeHandler(e, editNomeBool = null) {
		const inputsClick =
			e.target === this.refs.tituloInput ||
			e.target === this.refs.descInput

		if (inputsClick) editNomeBool = true
		if (editNomeBool === null) editNomeBool = !this.state.editNomeBool

		const edit =
			this.props.licao.id === this.state.edit.id ?
				this.state.edit :
				{ ...this.props.licao }

		if (this.state.editNomeBool && !inputsClick) {
			const licao = Object.assign({}, this.props.licao)
			licao.titulo = this.state.edit.titulo
			licao.desc = this.state.edit.desc

			LicoesActions.updateTitulo(licao)
		}

		this.setState({ editNomeBool, edit })
	}

	componentDidMount() {
		const clickHandler = e => {
			if (this.wrapperRef && !this.wrapperRef.contains(e.target)) {
				this.editNomeHandler(e, false)
				this.setState({ edit: this.props.licao })
			}
		}

		document.addEventListener('click', clickHandler)
	}

	handleCatChange(e) {
		LicoesActions.updateCat({
			id: this.props.licao.id,
			cat_id: e.target.value
		})
	}

	deleteLicao() {
		LicoesActions.deleteLicao(this.props.licao.id)
		popUp.close(this.props.popUp.state.id)
	}

	render() {
		return (
			<div ref={ref => this.wrapperRef = ref}>
				<br />
				<div className='d-flex flex-wrap justify-content-center flex-column align-items-center'>

					<div
						className='pointer d-flex flex-wrap justify-content-center align-items-center'
						style={{ width: '100%' }}
						onClick={e => this.editNomeHandler(e)}
					>
						<div
							style={{ width: '320px' }}
							className='mx-4 my-3 d-flex flex-wrap justify-content-center flex-column'
						>
							<small
								hidden={this.state.editNomeBool}
								className='text-secondary text-center'
							>
								<i> Clique no nome para editar, depois clique fora do campo para salvar. </i>
							</small>
						</div>

						<div
							style={{ width: '320px' }}
							className='mx-4 my-3 d-flex flex-wrap justify-content-center flex-column'
						>
							<h1
								onClick={e => this.editNomeHandler(e, true)}
								hidden={this.state.editNomeBool}
								className='display-4 text-center'
							>
								{this.props.licao.titulo}
							</h1>

							<div name='edit-fields'>
								<input
									ref='tituloInput'
									onChange={e => this.edit(e)}
									name='titulo'
									hidden={!this.state.editNomeBool}
									className='form-control form-control-lg display-4 text-center'
									value={this.state.edit.titulo}
								/>

								<textarea
									ref='descInput'
									onChange={e => this.edit(e)}
									name='desc'
									hidden={!this.state.editNomeBool}
									className='form-control display-4 text-center'
									value={this.state.edit.desc}
									rows='4'
								>
								</textarea>
							</div>

							<button
								hidden={this.state.editNomeBool}
								className='btn btn-success btn-sm mt-4'
								onClick={() => popUp.open(this.refs.newCardPopup.state.id)}
							>
								Criar Card
              </button>

							<PopUp ref='newCardPopup'>

								<div className='d-flex justify-content-center'>
									<div className='m-4 col-sm-12'>
										<h5 className='mb-0 text-center'>
											<b>
												Criar novo card
                      </b>
										</h5>
										<small className='text-center form-text text-muted mb-3 mt-1'></small>
										<div className='form-group'>

											<input
												type='text'
												className='form-control mb-3'
												name='text'
												placeholder='Texto'
												value={this.state.newCard.text}
												onChange={e => this.handleChange(e)}
											/>

											<div className="mb-1">
												<input
													type="file"
													name='images'
													value={this.state.newCard.images[0]}
													onChange={e => this.handleChange(e, 0)}
												/>
											</div>

										</div>

										<button
											type='submit'
											onClick={() => this.createCard()}
											className='col-sm-12 btn btn-primary'
										>
											Adicionar
                 		</button>

										<button className='col-sm-12 btn btn-danger' onClick={() => this.criarBotao()}>Fechar</button>
									</div>
								</div>

							</PopUp>
						</div>

						<div
							style={{ width: '320px' }}
							className='mx-4 my-3 d-flex flex-wrap justify-content-center flex-column'
						>
							<p hidden={this.state.editNomeBool} className='text-center'>
								<b>
									Descrição
								</b>
							</p>
							<small hidden={this.state.editNomeBool} className='text-secondary text-center'>
								<i> {this.props.licao.desc} </i>
							</small>
						</div>



					</div>

					<Cards cards={this.props.licao.cards} />
				</div>

				<div className='d-flex flex-wrap justify-content-center'>
					<div style={{ width: '320px' }} className='d-flex flex-wrap justify-content-center flex-column'>
						<button onClick={() => this.deleteLicao()} className='btn btn-danger'>Deletar</button>
					</div>

					<div
						style={{ width: '320px' }}
						className='flex-wrap m-4 justify-content-center flex-column'
					>
						<select
							value={this.props.licao.categoria_id}
							onChange={e => this.handleCatChange(e)}
							className='custom-select'
						>
							<option value={false} disabled>Trocar de Categoria</option>
							<option value={1}>Categoria #1</option>
							<option value={2}>Categoria #2</option>
							<option value={3}>Categoria #3</option>
							<option value={4}>Categoria #4</option>
						</select>
					</div>
				</div>

				<br />
			</div>
		)
	}
}

export default Licao

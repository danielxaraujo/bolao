import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import { Card, CardHeader, CardBody, Table } from 'reactstrap'

import If from '../../components/if'
import { search } from '../user/userActions'

import blackAvatar from '../../assets/img/blankavatar.svg'
import duck from '../../assets/img/duck.svg'

class Classificacao extends Component {
	componentWillMount() {
		this.props.search()
	}
	mudancaClassificacao(user) {
		const r = user.classificacaoAnterior - user.classificacao
		if (r === 0) {
			return 'classificacaoIgual'
		} if (r > 0) {
			return 'classificacao_up'
		} else {
			return 'classificacao_down'
		}
	}
	resultadoMudancaClassificacao(user) {
		const r = user.classificacaoAnterior - user.classificacao
		if (r === 0) {
			return ''
		} else {
			return r
		}
	}
	render() {
		const users = this.props.users
		const ultimaClassificacao = users.reduce((ult, user) => user.classificacao > ult ? user.classificacao : ult, 0)
		return (
			<div style={{ backgroundColor: 'white' }}>
				<Card style={{ marginBottom: '0px' }}>
					<CardHeader>Classificação</CardHeader>
					<div className='divplayers'>
						<div style={{ justifySelf: 'right', alignSelf: 'top' }}>
							<img alt='avatar' src={users[1] ? users[1].avatar ? `https://graph.facebook.com/${users[1].facebookId}/picture?width=${500}&height=${500}` : blackAvatar : blackAvatar} className='player2' width={50} height={50} />
						</div>
						<div style={{ justifySelf: 'center', alignSelf: 'top' }}>
							<img alt='avatar' src={users[0] ? users[0].avatar ? `https://graph.facebook.com/${users[0].facebookId}/picture?width=${500}&height=${500}` : blackAvatar : blackAvatar} className='player1' width={50} height={50} />
						</div>
						<div style={{ justifySelf: 'left', alignSelf: 'top' }}>
							<img alt='avatar' src={users[2] ? users[2].avatar ? `https://graph.facebook.com/${users[2].facebookId}/picture?width=${500}&height=${500}` : blackAvatar : blackAvatar} className='player3' width={50} height={50} />
						</div>
					</div>
					<CardBody style={{ padding: '0px' }}>
						<Table responsive striped borderless>
							<thead>
								<tr className='gridClassificacao'>
									<th className='text-right placarClassificacao'>#</th>
									<th className='text-center'></th>
									<th className='text-center'></th>
									<th>Nome</th>
									<th className='text-center'></th>
									<th className='d-flex justify-content-center classificacaoHeaderTD'><div className='classificacaoHeader' style={{ backgroundColor: 'rgb(115,129,143)' }}></div></th>
									<th className='d-flex justify-content-center classificacaoHeaderTD'><div className='classificacaoHeader' style={{ backgroundColor: 'rgb(75, 192, 192)' }}></div></th>
									<th className='d-flex justify-content-center classificacaoHeaderTD'><div className='classificacaoHeader' style={{ backgroundColor: 'rgb(54, 162, 235)' }}></div></th>
									<th className='d-flex justify-content-center classificacaoHeaderTD'><div className='classificacaoHeader' style={{ backgroundColor: 'rgb(255, 205, 86)' }}></div></th>
									<th className='d-flex justify-content-center classificacaoHeaderTD'><div className='classificacaoHeader' style={{ backgroundColor: 'rgb(255, 159, 64)' }}></div></th>
								</tr>
							</thead>
							<tbody>
								{users.map((user, idx) => {
									return (
										<tr key={user.classificacao + '-' + idx} className='gridClassificacao'>
											<td className='text-right placarClassificacao'>{user.classificacao || '-'}</td>
											<td className='text-center'>
												<If test={user.classificacao > 0 && user.classificacao < 4}>
													<i className={`fas fa-trophy fa-lg ${user.classificacao === 1 ? 'goldTrophy' : user.classificacao === 2 ? 'silverTrophy' : 'bronzeTrophy'}`}></i>
												</If>
												<If test={user.classificacao > 3 && user.classificacao === ultimaClassificacao}>
													<img src={duck} alt='duck' width={20} height={20} />
												</If>
											</td>
											<td className='text-center'>
												<img alt='avatar' src={user.avatar ? `https://graph.facebook.com/${user.facebookId}/picture?width=${500}&height=${500}` : blackAvatar} className='img-avatar' width={50} height={50} />
											</td>
											<td>{user.name}</td>
											<td className={`text-center classificacao ${this.mudancaClassificacao(user)}`}>{this.resultadoMudancaClassificacao(user)} </td>
											<td className='text-center'>{user.totalAcumulado}</td>
											<td className='text-center placarClassificacao'>{user.placarCheio}</td>
											<td className='text-center placarClassificacao'>{user.placarTimeVencedorComGol}</td>
											<td className='text-center placarClassificacao'>{user.placarTimeVencedor}</td>
											<td className='text-center placarClassificacao'>{user.placarGol}</td>
										</tr>
									)
								})}
							</tbody>
						</Table>
					</CardBody>
				</Card>
				<Card>
					<CardHeader>Legenda</CardHeader>
					<CardBody style={{ padding: '0px' }}>
						<Table responsive striped borderless>
							<tbody>
								<tr className='gridLegenda'>
									<td className='d-flex justify-content-center'><div style={{ margin: '2px', borderRadius: '10px', backgroundColor: 'rgb(115,129,143)', width: '20px', height: '20px' }}></div></td>
									<td>Pontuação total</td>
								</tr>
								<tr className='gridLegenda'>
									<td className='d-flex justify-content-center'><div style={{ margin: '2px', borderRadius: '10px', backgroundColor: 'rgb(75, 192, 192)', width: '20px', height: '20px' }}></div></td>
									<td>
										Placar Exato<br />
										<span className='small text-muted'>Ex: Palpite 2 x 1 e resultado 2 x 1, acertou o placar exato</span>
									</td>
								</tr>
								<tr className='gridLegenda'>
									<td className='d-flex justify-content-center'><div style={{ margin: '2px', borderRadius: '10px', backgroundColor: 'rgb(54, 162, 235)', width: '20px', height: '20px' }}></div></td>
									<td>
										Resultado mais gol<br />
										<span className='small text-muted'>Ex: Palpite 2 x 1 e resultado 2 x 0, acertou time ganhador / empate e o número de gols de um dos time</span>
									</td>
								</tr>
								<tr className='gridLegenda'>
									<td className='d-flex justify-content-center'><div style={{ margin: '2px', borderRadius: '10px', backgroundColor: 'rgb(255, 205, 86)', width: '20px', height: '20px' }}></div></td>
									<td>
										Somente resultado<br />
										<span className='small text-muted'>Ex: Palpite 2 x 1 e resultado 3 x 2, acertou somente time ganhador / empate</span>
									</td>
								</tr>
								<tr className='gridLegenda'>
									<td className='d-flex justify-content-center'><div style={{ margin: '2px', borderRadius: '10px', backgroundColor: 'rgb(255, 159, 64)', width: '20px', height: '20px' }}></div></td>
									<td>
										Somente gol<br />
										<span className='small text-muted'>Ex: Palpite 2 x 1 e resultado 2 x 0, acertou somente o número de gols de um dos time</span>
									</td>
								</tr>
							</tbody>
						</Table>
					</CardBody>
				</Card>
			</div>
		)
	}
}

const mapStateToProps = state => ({ users: state.userStore.users })
const mapDispatchToProps = dispatch => bindActionCreators({ search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Classificacao)
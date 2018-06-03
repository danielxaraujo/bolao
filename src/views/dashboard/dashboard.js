import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import { Card, CardHeader, CardBody, Table, Row, Col } from 'reactstrap'

import { search } from '../user/userActions'
import If from '../../components/if'

import blackAvatar from '../../assets/img/blankavatar.svg'

class Dashboard extends Component {
	componentWillMount() {
		this.props.search()
	}
	render() {
		const users = this.props.users
		return users.length > 0 ? (
			<div className='animated fadeIn'>
				<Row>
					<Col className='h1'>
						<h1>Classificação</h1>
					</Col>
				</Row>
				<Row>
					<If test={users[0] !== undefined}>
						<Col xs='12' sm='12' md='4' lg='4' lx='4' >
							<Card>
								<CardBody style={{ backgroundColor: '#E5C100' }}>
									<div className='text-muted text-right'>
										<i className={'fas fa-trophy fa-2x goldTrophy'}></i>
									</div>
									<div className='d-flex flex-row'>
										<div className='h2 text-muted text-left pr-2'>
											<img alt='avatar' src={users[0].avatar ? users[0].avatar : blackAvatar} width='40px' height='40px' className='img-avatar' />
										</div>
										<div>
											<div className='h5 mb-0 text-white'>{users[0].name}</div>
											<small className="text-white text-uppercase font-weight-bold">70 PONTOS</small>
										</div>
									</div>
									<div className="progress-xs mt-1 mb-0 progress-white  progress">
										<div className="progress-bar" role="progressbar" aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{ width: '70%' }}>
										</div>
									</div>
								</CardBody>
							</Card>
						</Col>
					</If>
					<If test={users[1] !== undefined}>
						<Col xs='12' sm='12' md='4' lg='4' lx='4' >
							<Card>
								<CardBody style={{ backgroundColor: '#ADADAD' }}>
									<div className='text-muted text-right'>
										<i className={'fas fa-trophy fa-2x silverTrophy'}></i>
									</div>
									<div className='d-flex flex-row'>
										<div className='h2 text-muted text-left pr-2'>
											<img alt='avatar' src={users[1].avatar ? users[1].avatar : blackAvatar} width='40px' height='40px' className='img-avatar' />
										</div>
										<div>
											<div className='h5 mb-0 text-white'>{users[1].name}</div>
											<small className="text-white text-uppercase font-weight-bold">50 PONTOS</small>
										</div>
									</div>
									<div className="progress-xs mt-1 mb-0 progress-white progress">
										<div className="progress-bar" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style={{ width: '50%' }}>
										</div>
									</div>
								</CardBody>
							</Card>
						</Col>
					</If>
					<If test={users[1] !== undefined}>
						<Col xs='12' sm='12' md='4' lg='4' lx='4' >
							<Card>
								<CardBody style={{ backgroundColor: '#B8722D' }}>
									<div className='text-muted text-right'>
										<i className={'fas fa-trophy fa-2x bronzeTrophy'}></i>
									</div>
									<div className='d-flex flex-row'>
										<div className='h2 text-muted text-left pr-2'>
											<img alt='avatar' src={users[1].avatar ? users[1].avatar : blackAvatar} width='40px' height='40px' className='img-avatar' />
										</div>
										<div>
											<div className='h5 mb-0 text-white'>{users[1].name}</div>
											<small className="text-white text-uppercase font-weight-bold">30 PONTOS</small>
										</div>
									</div>
									<div className="progress-xs mt-1 mb-0 progress-white progress">
										<div className="progress-bar" role="progressbar" aria-valuenow="30" aria-valuemin="0" aria-valuemax="100" style={{ width: '30%' }}>
										</div>
									</div>
								</CardBody>
							</Card>
						</Col>
					</If>
				</Row>
			</div>
		) : null
	}
}

const mapStateToProps = state => ({ users: state.userStore.users })
const mapDispatchToProps = dispatch => bindActionCreators({ search }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
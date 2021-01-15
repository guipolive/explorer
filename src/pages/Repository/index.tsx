import React from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import {Header, RepositoryInfo, Issues} from './styles';

import logoImg from '../../assets/logo.svg'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

interface RepositoryParams {
	repository: string;
}

const Repository: React.FC = () => {
	const {params} = useRouteMatch<RepositoryParams>();

	return(
		<>
			<Header>
				<img src={logoImg} alt="Github Explorer"/>
				<Link to="/" >
					<FiChevronLeft size={20} />
					<span>Voltar</span>
				</Link>
			</Header>

			<RepositoryInfo>
				<header>
					<img src="https://avatars3.githubusercontent.com/u/36776702?s=60&v=4" alt="Guilherme" title="Guilherme" />
					<div className="repository-description">
						<strong>guipolive/explorer</strong>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, aspernatur.</p>
					</div>
				</header>

				<ul>
					<li>
						<strong>1808</strong>
						<span>Stars</span>
					</li>

					<li>
						<strong>48</strong>
						<span>Forks</span>
					</li>

					<li>
						<strong>48</strong>
						<span>Issues Abertas</span>
					</li>
				</ul>
			</RepositoryInfo>

			<Issues>
				<Link className="issue" to="#" >
					<div className="issue__information">
						<strong>gostack-desafio-conceitos-react-native</strong>
						<span>Guilherme Oliveira</span>
					</div>

					<FiChevronRight size={25} />
				</Link>
			</Issues>
		</>
	)
}

export default Repository;

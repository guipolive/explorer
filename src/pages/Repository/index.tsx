import React, {useEffect, useState} from 'react';
import {Link, useRouteMatch} from 'react-router-dom';
import {Header, RepositoryInfo, Issues} from './styles';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';

interface RepositoryParams {
	repository: string;
}

interface Repository {
	full_name: string;
	description: string;
	stargazers_count: number;
	forks_count: number;
	open_issues_count: number;
	owner: {
		login: string;
		avatar_url: string;
	}
}

interface Issue {
	title: string;
	id: number;
	html_url: string;
	user: {
		login: string;
	}
}

const Repository: React.FC = () => {
	const {params} = useRouteMatch<RepositoryParams>();

	const [repository, setRepository] = useState<Repository | null>(null);
	const [issues, setIssues] = useState<Issue[]>([]);

	useEffect(() => {
		api.get(`/repos/${params.repository}`).then(response => {
			setRepository(response.data);
		});

		api.get(`/repos/${params.repository}/issues`).then(response => {
			setIssues(response.data);
		});
	}, [params.repository])

	return(
		<>
			<Header>
				<img src={logoImg} alt="Github Explorer"/>
				<Link to="/" >
					<FiChevronLeft size={20} />
					<span>Voltar</span>
				</Link>
			</Header>

			{repository && (
				<RepositoryInfo>
					<header>
						<img src={repository.owner.avatar_url} alt={repository.owner.login} title={repository.owner.login} />
						<div className="repository-description">
							<strong>{repository.full_name}</strong>
							<p>{repository.description}</p>
						</div>
					</header>

					<ul>
						<li>
							<strong>{repository.stargazers_count}</strong>
							<span>Stars</span>
						</li>

						<li>
							<strong>{repository.forks_count}</strong>
							<span>Forks</span>
						</li>

						<li>
							<strong>{repository.open_issues_count}</strong>
							<span>Issues Abertas</span>
						</li>
					</ul>
				</RepositoryInfo>
			)}

			<Issues>
				{issues.map(issue => (
					<a key={issue.id} className="issue" href={issue.html_url} >
						<div className="issue__information">
							<strong>{issue.title}</strong>
							<span>{issue.user.login}</span>
						</div>

						<FiChevronRight size={25} />
					</a>
				))}
			</Issues>
		</>
	)
}

export default Repository;

import React, {useEffect, useState, FormEvent} from 'react';
import {Title, Form, Repositories, Error} from './styles';
import {Link} from 'react-router-dom';
import api from '../../services/api';

import {FiChevronRight} from 'react-icons/fi';
import logoImg from '../../assets/logo.svg'

interface Repository {
	id: number;
	full_name: string;
	description:  string;
	owner: {
		login: string;
		avatar_url: string;
	}
}

const Dashboard: React.FC = () => {
	const [newRepo, setNewRepo] = useState('');

	const [repositories, setRespositories] = useState<Repository[]>(() => {
		const storagedRepositories = localStorage.getItem('@explorer:repositories');

		if(storagedRepositories) {
			return JSON.parse(storagedRepositories);
		} else {
			return [];
		}
	});
	const [error, setError] = useState('');

	async function handleAddRepository(e: FormEvent<HTMLFormElement>): Promise<void> {
		e.preventDefault();

		if(!newRepo) {
			setError('Digite o autor/nome do repositório');
			return;
		}

		try {
			const response = await api.get<Repository>(`/repos/${newRepo}`);

			const repository = response.data;

			setRespositories([...repositories, repository]);
			setNewRepo('');
			setError('');

		} catch (err) {
			setError('Erro na busca por esse repositório!');
		}

	}

	useEffect( () => {
		localStorage.setItem('@explorer:repositories', JSON.stringify(repositories))
	}, [repositories])

	return(
		<>
			<img src={logoImg} alt="Github Explorer"/>
			<Title>Explore Repositórios no Github</Title>

			<Form hasError={!!error} onSubmit={handleAddRepository} >
				<input
					value={newRepo}
					onChange={e => setNewRepo(e.target.value)}
					placeholder="owner/repository..."
				/>
				<button type="submit">Pesquisar</button>
			</Form>

			{error && <Error>{error}</Error>}

			<Repositories>
				{repositories.map(repository => (
					<Link key={repository.id} to={`/repository/${repository.full_name}`}>
						<img
							src={repository.owner.avatar_url}
							alt={repository.owner.login}
						/>

						<div className="info" >
							<strong>{repository.full_name}</strong>
							<p>{repository.description}</p>
						</div>
						<FiChevronRight size='25px' />
					</Link>
				))}
			</Repositories>
		</>
	)
}

export default Dashboard;

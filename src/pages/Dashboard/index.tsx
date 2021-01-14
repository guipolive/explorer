import React, {useEffect, useState, FormEvent} from 'react';
import {Title, Form, Repositories} from './styles';

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
	const [repositories, setRespositories] = useState<Repository[]>([]);

	async function handleAddRepository(e: FormEvent<HTMLFormElement>): Promise<void> {
		e.preventDefault();

		const response = await api.get<Repository>(`/repos/${newRepo}`);

		const repository = response.data;

		setRespositories([...repositories, repository]);
	}

	useEffect( () => {

	}, [])

	return(
		<>
			<img src={logoImg} alt="Github Explorer"/>
			<Title>Explore Repositórios no Github</Title>

			<Form onSubmit={handleAddRepository} >
				<input
					value={newRepo}
					onChange={e => setNewRepo(e.target.value)}
					placeholder="Nome do repositório..."
				/>
				<button type="submit">Pesquisar</button>
			</Form>

			<Repositories>
				{repositories.map(repository => (
					<a key={repository.id} href="#">
						<img
							src={repository.owner.avatar_url}
							alt={repository.owner.login}
						/>

						<div className="info" >
							<strong>{repository.full_name}</strong>
							<p>{repository.description}</p>
						</div>
						<FiChevronRight size='25px' />
					</a>
				))}
			</Repositories>
		</>
	)
}

export default Dashboard;

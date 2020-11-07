import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import githubExplorerLogo from '../../assets/images/github-explorer-logo.svg';

import { RepositoryParams } from './types';

import { Header, RepositoryInfo, Issues } from './styles';

const Repository: React.FC = () => {
	const { params } = useRouteMatch<RepositoryParams>();

	return (
		<>
			<Header>
				<img src={githubExplorerLogo} alt="Github Explorer" />
				<Link to="/">
					<FiChevronLeft size={16} />
					Voltar
				</Link>
			</Header>
			<RepositoryInfo>
				<header>
					<img src="" alt="" />
					<div></div>
				</header>
				<ul>
					<li>
						<strong>100</strong>
						<span>Start</span>
					</li>
					<li>
						<strong>100</strong>
						<span>Forks</span>
					</li>
					<li>
						<strong>100</strong>
						<span>Issues abertas</span>
					</li>
				</ul>
			</RepositoryInfo>
			<Issues>
				<Link to="">
					<div>
						<strong>repository.full_name</strong>
						<p>repository.description</p>
					</div>
					<FiChevronRight size={20} />
				</Link>
			</Issues>
		</>
	);
};

export default Repository;

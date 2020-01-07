import React, { Component } from 'react';

import { FaGithubAlt, FaPlus, FaSpinner, FaMinus } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import api from '../../services/api';

import Container from '../../components/Container';

import { Form, Submitbutton, List, ToDelete } from './styles';

export default class Main extends Component {
  state = {
    newRepo: '',
    repositories: [],
    loading: false,
    error: null,
  };

  // Carregar os dados do localStorage
  componentDidMount() {
    const repositories = localStorage.getItem('repositories');

    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories) });
    }
  }

  // Salvar os dados do localStorage
  componentDidUpdate(_, prevState) {
    const { repositories } = this.state;

    if (prevState.repositories !== repositories) {
      localStorage.setItem('repositories', JSON.stringify(repositories));
    }
  }

  handleInputChange = e => {
    this.setState({ newRepo: e.target.value, error: null });
  };

  handleSubmit = async e => {
    e.preventDefault();

    this.setState({ loading: true, error: false });

    try {
      const { newRepo, repositories } = this.state;

      if (newRepo === '')
        throw new Error('Você precisa indicar um repositorio');

      const hasRepo = repositories.find(r => r.name === newRepo);

      if (hasRepo) throw new Error('Repositório duplicado');

      const response = await api.get(`/repos/${newRepo}`);

      const data = {
        name: response.data.full_name,
      };

      this.setState({
        repositories: [...repositories, data],
        newRepo: '',
      });
    } catch (error) {
      this.setState({ error: true });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleDelete = repository => {
    const { repositories } = this.state;
    this.setState({
      repositories: repositories.filter(r => r !== repository),
    });
  };

  render() {
    const { newRepo, repositories, loading, error } = this.state;
    return (
      <Container>
        <h1>
          <FaGithubAlt />
          Repositorios
        </h1>

        <Form onSubmit={this.handleSubmit} error={error}>
          <input
            type="text"
            placeholder="Adicionar repositorios"
            value={newRepo}
            onChange={this.handleInputChange}
          />

          <Submitbutton loading={+loading}>
            {loading ? (
              <FaSpinner color="#FFF" size={14} />
            ) : (
              <FaPlus color="#FFF" size={14} />
            )}
          </Submitbutton>
        </Form>

        <List>
          {repositories.map(repository => (
            <li key={repository.name}>
              <span>{repository.name}</span>
              <Link to={`/repository/${encodeURIComponent(repository.name)}`}>
                Detalhes
              </Link>
              <ToDelete onClick={() => this.handleDelete(repository)}>
                <FaMinus />
              </ToDelete>
            </li>
          ))}
        </List>
      </Container>
    );
  }
  // export default function Main() {
  // return (
  //   <Title error={false}>
  //     Main
  //     <small>menor</small>
  //   </Title>
  // );}
}

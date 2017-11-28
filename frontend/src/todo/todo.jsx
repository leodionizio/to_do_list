import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import TodoForm from './todoForm'
import TodoList from './todoList'

const URL = 'http://localhost:3003/api/todos'

export default class Todo extends Component {
    constructor(props) {
        super(props)
        this.state = { description: '', list: [] }
        this.handleSearch = this.handleSearch.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleAdd = this.handleAdd.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.handleMarkAsDone = this.handleMarkAsDone.bind(this)
        this.handleMarkAsPending = this.handleMarkAsPending.bind(this)
        this.handleClear = this.handleClear.bind(this)

        this.refresh()
    }

    // ATUALIZA A LISTA
    refresh(description = '') {
        const search = description ? `&description__regex=/${description}/` : ''

        axios.get(`${URL}?sort=-createAt${search}`)
            .then(resp => {
                this.setState({ ...this.state, description, list: resp.data })
            })
    }

    // FAZ UMA BUSCA NA LISTA
    handleSearch() {
        this.refresh(this.state.description)
    }

    // LIMPA O CAMPO DE BUSCA
    handleClear() {
        this.refresh()
    }

    // ATUALIZA O VALOR DA INPUT
    handleChange(e) {
        this.setState({ ...this.state, description: e.target.value })
    }

    // CRUD
    // 
    // ADICIONA ELEMENTOS NA LISTA
    handleAdd() {
        const description = this.state.description
        if (description) {
            axios.post(URL, { description })
                .then(resp => this.refresh())
        }
    }

    // MARCA ELEMENTO DA LISTA COMO FINALIZADO
    handleMarkAsDone(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: true })
            .then(resp => this.refresh(this.state.description))
    }

    // MARCA ELEMENTO DA LISTA COMO PENDENTE
    handleMarkAsPending(todo) {
        axios.put(`${URL}/${todo._id}`, { ...todo, done: false })
            .then(resp => this.refresh(this.state.description))
    }

    // REMOVE ELEMENTO DA LISTA
    handleRemove(todo) {
        axios.delete(`${URL}/${todo._id}`)
            .then(resp => this.refresh(this.state.description))
    }

    render() {
        return (
            <div>
                <br />
                <PageHeader name="Tarefas" small="Cadastro" />
                <br />
                <TodoForm description={this.state.description}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd}
                    handleSearch={this.handleSearch}
                    handleClear={this.handleClear} />
                <br />
                <TodoList list={this.state.list}
                    handleRemove={this.handleRemove}
                    handleMarkAsDone={this.handleMarkAsDone}
                    handleMarkAsPending={this.handleMarkAsPending} />
            </div>
        )
    }
}
import React from 'react'

export default props => (
    <nav className="navbar navbar-toggleable-sm navbar-inverse bg-inverse">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#">
        <i className="fa fa-calendar-check-o"></i>
        &emsp;To Do List
        </a>

        <div className="collapse navbar-collapse" id="navbar">
            <ul className="navbar-nav mr-auto mt-2 mt-md-0">
                <li className="nav-item">
                    <a className="nav-link" href="#/todos">Tarefas</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#/about">Sobre</a>
                </li>
            </ul>
        </div>
    </nav>
)
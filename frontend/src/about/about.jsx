import React from 'react'
import PageHeader from '../template/pageHeader'

export default props => (
    <div>
        <br />
        <PageHeader name="Sobre" small="Nós" />
        <br />
        <h4>Nossa História</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet ullam obcaecati unde doloribus architecto voluptatum quod deserunt omnis impedit praesentium! Reiciendis vitae rem magnam corporis aliquid atque numquam ipsam minus.</p>
        <br />
        <h4>Missão Visão e Valores</h4>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate laudantium pariatur doloribus aut natus suscipit numquam quo consequatur sit, nulla velit possimus? Sit odio dolorem suscipit ad, quas quo dignissimos!</p>
        <br />
        <h4>Contatos</h4>
        <ul>
            <li>
                <i className="fa fa-envelope"></i>
                <a href="#">
                    &emsp;email@email.com
                </a>
            </li>
            <li>
                <i className="fa fa-phone"></i>
                <a href="#">
                    &emsp;3333-3333
                </a>
            </li>
        </ul>
    </div>
)
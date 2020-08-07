import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';
import { Link } from 'react-router-dom';

import './styles.css';

interface PageHeaderProps {
    title: string;  
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="Voltar"/>
                    </Link>
                    <img src={logoImg} alt="Proffy"/>
                </div>

                <div className="header-content">
                    <strong>{props.title}</strong>
                    {props.children}
                </div>
            </header>
    )
}

export default PageHeader

//interface: para definir o formato das tipagens de um objeto
//React.FunctionComponent ou React.FC => <PageHeaderProps> são as propriedades que o componente pode receber
//props.children é uma propriedade automática do React que é o conteúdo que foi escrito dentro do componente.
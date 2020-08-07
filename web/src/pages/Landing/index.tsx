import React from 'react';
import { Link } from 'react-router-dom'; //para não recarregar a página inteira

import logoImg from '../../assets/images/logo.svg' //logoImg é uma variável Javascript, nós demos o nome
import landingImg from '../../assets/images/landing.svg'
import studyIcon from '../../assets/images/icons/study.svg'
import giveClassesIcon from '../../assets/images/icons/give-classes.svg'
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css'; //mesmo estando no mesmo diretório, precisa colocar ./ para não confundir com um pacote em node-modules 

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy"/>
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImg} alt="" className="hero-image"/>

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt=""/>
                        Estudar
                    </Link>
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt=""/>
                        Dar aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Total de 200 conxões já realizadas <img src={purpleHeartIcon} alt="Coração Roxo" />
                </span>
            </div>
        </div>
    )
}

export default Landing
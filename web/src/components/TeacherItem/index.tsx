import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/55797183?s=460&u=2041c25f81c8b3a4c6db0b45ac29a8d5758ea561&v=4" alt="Giuliana Gabrielli"/>
                        <div>
                            <strong>Giuliana Gabrielli</strong>
                            <span>Química</span>
                        </div>
                    </header>
                    <p> 
                        Resumo da história.
                        <br/>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate id, autem in rem exercitationem omnis, eum sapiente molestias quod, maxime necessitatibus asperiores veniam veritatis nobis nam voluptatibus quibusdam. Dignissimos, obcaecati!
                    </p>

                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$100,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem
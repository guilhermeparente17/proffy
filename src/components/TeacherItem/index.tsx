import React from 'react'
import whatsappIcon from '../../assets/image/images/icons/whatsapp.svg'
import './styles.css'

function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://avatars1.githubusercontent.com/u/41457234?s=460&u=1e829cc5cb5e2e4c7f5547935fd65a98edc1e1cd&v=4" alt="Guilherme Parente" />
                        <div>
                            <strong>Guilherme Parente</strong>
                            <span>Química</span>
                        </div>
                    </header>

                    <p>
                        Entusiastas das melhores tecnologias de química avançada.
                        <br /> <br />
                        Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200 alunos incritos!
                    </p>

                    <footer>
                        <p>
                            Preço/Hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Entrar em contato"/>
                            Entrar em contato.
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem;
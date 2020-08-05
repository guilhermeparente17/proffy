import React from 'react'

import backIcon from '../../assets/image/images/icons/back.svg'
import logoImg from '../../assets/image/images/logo.svg'

import { Link } from 'react-router-dom'
import './styles.css'
interface PageHeaderProps {
    title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
                <div className="top-bar-container">
                    <Link to="/">
                        <img src={backIcon} alt="voltar"/>
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

export default PageHeader;
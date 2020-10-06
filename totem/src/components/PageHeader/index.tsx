import React from 'react'; 
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg'; 
import logo from '../../assets/images/logo.jpeg'; 

import './styles.css'; 

interface PageHeaderProps {
  title: string;
  description?: string;
  showBackLink?: boolean; 
};

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
      <div className="page-header-back">
      { props.showBackLink ? (
        <Link to="/" title="Sair" className="">
          <img src={backIcon} alt="Voltar" />
        </Link>) : ("")}

      </div>

      <div className="header-title">
          {props.title}
      </div>

      <div className="page-header-logo">
        <img src={logo} alt="Logo" width="100%"/>
      </div>
    </header>
  );
}

export default PageHeader; 
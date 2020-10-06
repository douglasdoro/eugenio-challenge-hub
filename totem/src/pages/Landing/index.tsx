import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader'; 

import './styles.css'; 

function Landing() {
  return(
    <div id="page-landing" className="container">
      <PageHeader 
        title="Uma nova forma de comprar com segurança">
      </PageHeader>

      <div id="page-landing-content" className="">
        <div className="description"></div>

        <div className="buttons-container">
          <Link to="/categories" title="" className="start" >
            Iniciar
          </Link>

          <Link to="/instructions" title="" className="instructions">
            Instruções de uso
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing; 
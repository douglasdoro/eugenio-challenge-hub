import React from 'react'; 
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader'; 
import PageFooter from '../../components/PageFooter'; 
import nextIcon from '../../assets/images/icons/next.svg'; 


import './styles.css'; 

function Instructions() {
  return(
    <div id="page-instructions" className="container">
      <PageHeader 
        title="Como que funciona o Natura Totem?"
        showBackLink={true}
      >
      </PageHeader>
      <div id="page-instructions-content" className="">
        
        <div className="step-buttons">
          <span className="step-number">1</span>
          <div className="step-text">
            Posicione os seus pés na área selecionada como indicado no solo;
          </div>
        </div>

        <div className="step-buttons">
          <span className="step-number">2</span>
          <div className="step-text">
            O sensor de movimento detectará a sua mão direita ou esquerda para navegar no totem;
          </div>
        </div>

        <div className="step-buttons">
          <span className="step-number">3</span>
          <div className="step-text">
          Abra a mão para navegar pela tela;
          </div>
        </div>

        <div className="step-buttons">
          <span className="step-number">4</span>
          <div className="step-text">
          Feche a mão para selecionar o item desejado;
          </div>
        </div>

        <div className="step-buttons">
          <span className="step-number">5</span>
          <div className="step-text">
            Esse totem interativo funciona 100% sem contato direto com a tela.
          </div>
        </div>

        <div className="step-buttons step-next">
          <div className="step-text">
            <Link to="/DecisionBotOrNot" title="Próximo" className="step-icon-next" >
              <img src={nextIcon} alt="Próximo"/>
            </Link>
          </div>
        </div>
      </div>
      <PageFooter> foo</PageFooter>
    </div>
  );
}

export default Instructions; 
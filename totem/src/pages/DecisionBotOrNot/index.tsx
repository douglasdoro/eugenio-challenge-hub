import React from 'react'; 
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader'; 
import PageFooter from '../../components/PageFooter'; 

import './styles.css'; 

function DecisionBotOrNot() {
  return(
    <div id="page-DecisionBotOrNot" className="container">
      <PageHeader 
        title="Deseja ser acompanhado pelo nosso chatbot inteligente?"
        showBackLink={true}
      >
      </PageHeader>
      <div id="page-DecisionBotOrNot-content" className="">
        <div className="decision-buttons yes">
          <Link to="/Categories" title="Sim" className="" >
            Sim
          </Link>
        </div>
        <div className="decision-buttons no">
          <Link to="/DecisionBotOrNot" title="Não"  >
            Não
          </Link>
        </div>
      </div>
      <PageFooter> foo</PageFooter>
    </div>
  );
}

export default DecisionBotOrNot; 
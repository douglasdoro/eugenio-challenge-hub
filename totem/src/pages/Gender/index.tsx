import React from 'react'; 
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader'; 
import PageFooter from '../../components/PageFooter'; 

import './styles.css'; 

function Categories() {
  return(
    <div id="page-categories" className="container">
      <PageHeader 
        title="Escolha uma linha"
        showBackLink={true}
      >
      </PageHeader>
      <div id="page-categories-content" className="">
        <div className="category-buttons perfumes">
          <Link to="/category" title="Masculino" className="">
            Masculino
          </Link>
        </div>
        <div className="category-buttons corpo">
          <Link to="/category" title="Feminino">
            Feminino
          </Link>
        </div>
        
      </div>
      <PageFooter></PageFooter>
    </div>
  );
}

export default Categories; 
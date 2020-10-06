import React from 'react'; 
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader'; 
import PageFooter from '../../components/PageFooter'; 

import './styles.css'; 

function SubCategory() {
  return(
    <div id="page-sub_category" className="container">
      <PageHeader 
        title="Escolha a intensidade da fragância"
        showBackLink={true}
      >
      </PageHeader>
      <div id="page-sub_category-content">
        <div className="sub_category-buttons">
          <Link to="/product-suggestion" title="Leve">
            Leve
          </Link>
        </div>
        <div className="sub_category-buttons">
          <Link to="/product-suggestion" title="Médio">
            Médio
          </Link>
        </div>
        <div className="sub_category-buttons">
          <Link to="/product-suggestion" title="Intenso">
            Intenso
          </Link>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default SubCategory; 
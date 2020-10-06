import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader'; 
import PageFooter from '../../components/PageFooter'; 


import './styles.css'; 

function Category() {
  return(
    <div id="page-category" className="container">
      <PageHeader 
        title="Família olfativa"
        showBackLink={true}
        >
      </PageHeader>
      <div id="page-category-content">
        <div className="category-buttons">
          <Link to="/sub-category" title="Amadeirado">
            Amadeirado
          </Link>
        </div>
        <div className="category-buttons">
          <Link to="/sub-category" title="Floral">
            Floral
          </Link>
        </div>
        <div className="category-buttons">
          <Link to="/sub-category" title="Cítrico">
            Cítrico
          </Link>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default Category; 
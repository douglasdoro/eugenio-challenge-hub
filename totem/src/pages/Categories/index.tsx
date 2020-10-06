import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader'; 
import PageFooter from '../../components/PageFooter'; 

import './styles.css'; 

function Categories() {
  return(
    <div id="page-categories" className="container">
      <PageHeader 
        title="Escolha uma categoria"
        showBackLink={true}
        >
      </PageHeader>
      <div id="page-categories-content" className="">
        <div className="category-buttons perfumes">
          <Link to="/gender" title="Perfumes" className="">
            Perfumes
          </Link>
        </div>
        <div className="category-buttons rosto">
          <Link to="/gender" title="Rosto">
            Rosto
          </Link>
        </div>
        <div className="category-buttons corpo">
          <Link to="/gender" title="Corpo">
            Corpo
          </Link>
        </div>
        <div className="category-buttons banho">
          <Link to="/gender" title="Banho">
            Banho
          </Link>
        </div>
      </div>
      <PageFooter></PageFooter>
    </div>
  );
}

export default Categories; 
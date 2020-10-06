import React from 'react'; 
import { Link } from 'react-router-dom';

import './styles.css'; 

const PageFooter: any = () => {
  return (
    <div className="page-footer">
      <Link to="/" title="Sair" className="">
              Sair
      </Link>
    </div>
  );
}


export default PageFooter; 
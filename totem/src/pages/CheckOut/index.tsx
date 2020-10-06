import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader'; 
import PageFooter from '../../components/PageFooter'; 

import './styles.css'; 

function Checkout() {
  return(
    <div id="page-checkout" className="container">
      <PageHeader 
        title="Finalizar compra com QR Code"
        showBackLink={true}
      >
      </PageHeader>

      <div id="page-checkout-content" className="">
        <div className="page-checkout-box">
          <div className="page-checkout-image">
            <img src="http://s.glbimg.com/jo/g1/f/original/2011/05/17/qrcode.jpg" alt="QR Code" />
          </div>

          <div className="page-checkout-details">
            <span>Valor total R$ 89,90</span>
            <p>Abra seu aplicativo preferido de pagamento digital e posicione a câmera no QR Code.</p>  

            <span>Retirada na NaturaBox</span>
            <p>Após a validação do pagamento você receberá um código para retirar o produto no Naturabox indicado.</p>  
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
}

export default Checkout; 
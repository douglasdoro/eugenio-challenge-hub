import React, { useState, useEffect } from 'react'; 
import { Link } from 'react-router-dom';

import PageHeader from '../../components/PageHeader'; 
import PageFooter from '../../components/PageFooter'; 

import './styles.css'; 

function Product() {
  const image = "https://static.natura.com/cdn/farfuture/CALcnfPvQJcnqAe9Oxyag5JXOcm5-m1VTwxIwBeTkHk/1601651268/sites/default/files/styles/medium/public/products/89834_1_3.jpg?itok=t4IBbDl9";
  const category = "Homem";
  const name = "NATURA HOMEM COR.AGIO"; 
  const description = "O frescor da combinação de ervas aromáticas com o gengibre e noz moscada, em equilíbrio com um toque de madeiras quentes, desperta e renova as energias nessa fragrância que te acompanha em todos os momentos do seu dia. Para homens verdadeiros e inteiros, livres de padrões e estereótipos."; 
  const price = "R$ 215,00";
  const priceOff = "R$ 190,00";
  const link = "";

  return(
    <div id="page-product" className="container">
      <PageHeader 
        title="Produto"
        showBackLink={true}
      >
      </PageHeader>

      <div id="page-product-content" className="">
        <div className="page-product-box">
          <div className="page-product-image">
            <img src={image} alt={name} />
            <span>Descrição</span>
            <p>
              {description}
            </p>
          </div>

          <div className="page-product-details">
            <span className="product-category">{category}</span>
            <span className="product-name">{name}</span>
            <span className="product-price-origin">{price}</span>
            <span className="product-price-off">{priceOff}</span>

            <div className="product-actions">
              <Link to="/check-out" className="product-purchase">Comprar com QR Code</Link>
              <Link to="/check-out" className="product-sample-for-free">Retirar uma amostra</Link>
            </div>
          </div>
        </div>



        {/* {
          products.map((product: ProductType) => {
            return <ProductComponent 
              image={product.image}
              category={product.category}
              name={product.name} 
              price={product.price}
              priceOff={product.priceOff}
              id={product.id}
              link={product.link}
            />
          })
        } */}
      </div>
      <PageFooter />
    </div>
  );
}

export default Product; 
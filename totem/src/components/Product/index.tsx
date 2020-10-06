import React from 'react'; 
import { Link } from 'react-router-dom';

import './styles.css'; 

export type ProductType = {
  image: string
  category: string;
  name: string; 
  price: string,
  priceOff: string,
  id: number,
  link: string
}

const ProductComponent: React.FC<ProductType> = ({image, category, name, price, priceOff, id, link}) => {
  return (
    <div className="product-buttons">
      <img 
        src={image}
        alt={name}
      />
      
      <span className="product-category">{category}</span>
      <span className="product-name">{name}</span>
      <span className="product-price-origin">{price}</span>
      <span className="product-price-off">{priceOff}</span>

      <Link to={link} className="product-details">
        Mais Detalhes
      </Link>
   </div>
  );
}

export default ProductComponent; 
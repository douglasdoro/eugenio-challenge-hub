import React from 'react'; 

import PageHeader from '../../components/PageHeader'; 
import PageFooter from '../../components/PageFooter'; 

import ProductComponent, { ProductType } from '../../components/Product'; 

import './styles.css'; 

const products: ProductType[] = [
  {
      "image": 'https://static.natura.com/sites/default/files/styles/medium/public/products/59847_1_1.jpg?itok=t9vT-Omx',
      "category": 'Homem',
      "name": "Natura Homem Essence",
      "price": 'R$ 145,00',
      "priceOff": 'R$ 105,90',
      "id": 1,
      "link": "/product"
  },
  {
      "image": 'https://static.natura.com/cdn/farfuture/CALcnfPvQJcnqAe9Oxyag5JXOcm5-m1VTwxIwBeTkHk/1601651268/sites/default/files/styles/medium/public/products/89834_1_3.jpg?itok=t4IBbDl9',
      "category": 'Homem',
      "name": "NATURA HOMEM COR.AGIO",
      "price": 'R$ 215,00',
      "priceOff": 'R$ 190,00',
      "id": 2,
      "link": "/product"
  },
  {
      "image": 'https://static.natura.com/cdn/farfuture/v6eLAc4lDyMfYRTX1u_OzjB0_XIyy450tqqks2COZz0/1601644861/sites/default/files/styles/medium/public/products/71770_1_9.jpg?itok=3IUJ4V--',
      "category": 'Homem',
      "name": "Natura Homem DOM",
      "price": 'R$ 145,00',
      "priceOff": 'R$ 109,90',
      "id": 3,
      "link": "/product"
  },
  {
      "image": 'https://static.natura.com/cdn/farfuture/gP1apisahcNObndNarG4TdQhz90CgXravT7iygyh82k/1601713019/sites/default/files/styles/medium/public/products/81951_1_4.jpg?itok=dLm3Jh4j',
      "category": 'Homem',
      "name": "Natura Homem Sagaz",
      "price": 'R$ 155,00',
      "priceOff": 'R$ 145,90',
      "id": 4,
      "link": "/product"
  },
  {
      "image": 'https://static.natura.com/cdn/farfuture/bUKtv4BPVkARmeqbbEjaNHEbPIlb-iigrZrHcQwuJtc/1601643958/sites/default/files/styles/medium/public/products/53255_1_9.jpg?itok=_VTbwOHA',
      "category": 'Homem',
      "name": "Natura Homem",
      "price": 'R$ 145,00',
      "priceOff": 'R$ 128,90',
      "id": 5,
      "link": "/product"
  },
  {
      "image": 'https://static.natura.com/sites/default/files/styles/medium/public/products/2190_1_8.jpg?itok=Oh79y_s9',
      "category": 'Homem',
      "name": "NATURA HOMEM EMOCION.E",
      "price": 'R$ 200,00',
      "priceOff": 'R$190,00',
      "id": 6,
      "link": "/product"
  },
];

function Suggestions() {

  return(
    <div id="page-suggestions" className="container">
      <PageHeader 
        title="Sugestões"
        showBackLink={true}
      >
      </PageHeader>

      <div id="page-suggestions-content" className="">
        {
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
        }
      </div>
      <PageFooter />
    </div>
  );
}

export default Suggestions; 
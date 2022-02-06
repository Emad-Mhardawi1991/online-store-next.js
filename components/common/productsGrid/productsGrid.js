import classes from "./productsGrid.module.css";

import ProductCard from '../../product/productCard/prodcutCard'
const ProductsGrid = (props) => {
    const {products } = props;
  return <div className={`${classes.container}`}>
     {products.map(product=><ProductCard key={product.id} product={product}/>)}
  </div>;
};

export default ProductsGrid;

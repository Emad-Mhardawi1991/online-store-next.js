import ProductsGrid from "../../components/common/productsGrid/productsGrid";
import { products} from '../../Dummy-data'

const ProductsPage =(props)=>{
    return <div className=" flex-grow">
        <ProductsGrid products ={props.products}/>
    </div>
}

export default ProductsPage;




export const getStaticProps = async()=>{

    const allProducts =  products;

    return {
        props: {
            products: allProducts
        }
    }
} 
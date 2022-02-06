import Image from "next/image";
import classes from "./productCard.module.css";

import HeartIcon from "../../icons/heart-icon";
import ShoppingBagIcon from "../../icons/shopping-bag-icon";

const ProductCard = (props) => {
  const { product } = props;
  return (
    <div className={`${classes.card_box} `}>
      <div className={classes.image_box}>
      <Image
          src={product.image}
          alt="Mountains"
          layout="fill"
          objectFit="cover"
          quality={25}
      
          
        />
      </div>
      <div className={classes.card_content}>
        <h2 className="flex-grow">{product.title}</h2>
        <div>
          <p>{product.price}$</p>
          <ShoppingBagIcon className={classes.shopping_bag_icon} />
        </div>
      </div>
      <HeartIcon className={classes.heart_icon} />
    </div>
  );
};

export default ProductCard;

/*


  <div className={`${classes.image_box} `}>
        <Image
          src={product.image}
          alt="Mountains"
          layout="fill"
          objectFit="contain"
          quality={100}
          width={50}
          height={50}
        />
      </div>

      <div className="p-3 bg-blue-200 h-full  ">
        <p className="text-md font-bold  ">{product.title}</p>
        <div className="flex  justify-between items-center">
          <p className="text-2xl font-semibold text-red-500">
            {product.price}£
          </p>
          <ShoppingBagIcon />
        </div>
      </div>
      <HeartIcon className={classes.heart_icon} />
 */

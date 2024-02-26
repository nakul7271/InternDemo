import Filter from "./Filter";
import { useSelector } from "react-redux";

import SingleProduct from "./SingleProduct";

const FeaturedProducts = ({ featuredItems }) => {
  const product = useSelector((state) => state.product);

  const transformProduct = () => {
    let sortedProducts = [...featuredItems];
    if (product.sortByOrder) {
      sortedProducts = sortedProducts.sort((a, b) => {
        return product.sortByOrder === "LowToHigh"
          ? a.price - b.price
          : b.price - a.price;
      });
    }

    console.log(sortedProducts);

    if (!product.byStock) {
      sortedProducts = sortedProducts.filter((prod) => prod.inStock);
    }

    console.log(sortedProducts);

    if (product.byFastDelivery) {
      sortedProducts = sortedProducts.filter((prod) => prod.fastDelivery);
    }

    if (product.byRating) {
      sortedProducts = sortedProducts.filter((prod) => {
        return prod.rating >= product.byRating;
      });
    }

    if (product.searchQuery) {
      sortedProducts = sortedProducts.filter((prod) => {
        return prod.name.toLowerCase().includes(product.searchQuery);
      });
    }

    // if (product.reload) {
    //   sortedProducts = featuredItems;
    // }

    return sortedProducts;
  };

  console.log(featuredItems);

  const items = transformProduct().map((item) => {
    return <SingleProduct key={item.id} item={item} />;
  });

  return (
    <div className="mx-[5%] md:mx-[12%] md:px-[12px] lg:mx-[1.5%] lg:px-[17px] xl:mx-[7%] xl:px-[20px] my-[50px]">
      <div className="flex justify-between">
        <Filter />
        <div className="w-3/4 ml-3">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {items}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;

// useEffect(() => {

//   const sendRequest = async () => {
//     const response = await fetch(
//       "https://my-first-project-react-h-a50f4-default-rtdb.firebaseio.com/mydb.json",
//       {
//         method: "PUT",
//         body: JSON.stringify({featuredItems: props.items} ),
//       }
//     );

//     if (!response.ok) {
//       throw new Error("something went wrong");
//     }
//   };

//   sendRequest();

// }, []);

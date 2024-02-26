import { useLoaderData, json, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import Policies from "../components/policies/policies";
import FeaturedProducts from "../components/featuredProducts/FeaturedProducts";

const HomePage = () => {
  const { featuredItems } = useLoaderData();

  return (
    <Suspense fallback={<p style={{ textAlign: "center" }}>Loading...</p>}>
      <Await resolve={featuredItems}>
        {(loadedItems) => {
          return (
            <>
              <FeaturedProducts featuredItems={loadedItems} />
              <Policies />
            </>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default HomePage;

const loadItems = async () => {
  const response = await fetch(
    "api"
  );

  if (!response.ok) {
    // throw new Response(JSON.stringify({ message: 'could not fetch events' }), {
    //     status: 500
    // });
    return json(
      { message: "Could not fetch data." },
      {
        status: 500,
      }
    );
    // console.log(response.ok);
    // return [];
  } else {
    // console.log(response.ok);
    const resData = await response.json();
    // return json(
    //   { message: "Could not fetch data." },
    //   {
    //     status: 500,
    //   }
    // );
    return resData.featuredItems;
  }
};

export const loader = async () => {
  return defer({
    featuredItems: loadItems(),
  });
};

// const DUMMY_ITEMS = [
//   {
//     id: "P1",
//     name: "Casual Shirt",
//     price: 599,
//     image: "images/product1",
//     inStock: 5,
//     fastDelivery: true,
//     rating: 4,
//   },
//   {
//     id: "P2",
//     name: "Cotton Shirt",
//     price: 454,
//     image: "images/product2",
//     inStock: 0,
//     fastDelivery: false,
//     rating: 3,
//   },
//   {
//     id: "P3",
//     name: "Casual Shirt",
//     price: 664,
//     image: "images/product3",
//     inStock: 4,
//     fastDelivery: true,
//     rating: 5,
//   },
//   {
//     id: "P4",
//     name: "Fit Jeans",
//     price: 740,
//     image: "images/product4",
//     inStock: 0,
//     fastDelivery: true,
//     rating: 4,
//   },
//   {
//     id: "P5",
//     name: "Casual Blazer",
//     price: 454,
//     image: "images/product5",
//     inStock: 2,
//     fastDelivery: true,
//     rating: 3,
//   },
//   {
//     id: "P6",
//     name: "Denim Jeans",
//     price: 664,
//     image: "images/product6",
//     inStock: 4,
//     fastDelivery: false,
//     rating: 5,
//   },
//   {
//     id: "P7",
//     name: "Jack & Jones",
//     price: 740,
//     image: "images/product7",
//     inStock: 0,
//     fastDelivery: true,
//     rating: 4,
//   },
//   {
//     id: "P8",
//     name: "Printed Shirt",
//     price: 640,
//     image: "images/product8",
//     inStock: 3,
//     fastDelivery: false,
//     rating: 3,
//   },
//   {
//     id: "P9",
//     name: "Regular Trouser",
//     price: 940,
//     image: "images/product9",
//     inStock: 4,
//     fastDelivery: true,
//     rating: 1,
//   },
//   {
//     id: "P10",
//     name: "Hooded Sweatshirt",
//     price: 700,
//     image: "images/product10",
//     inStock: 3,
//     fastDelivery: true,
//     rating: 2,
//   },
//   {
//     id: "P11",
//     name: "Casual Shirt",
//     price: 800,
//     image: "images/product11",
//     inStock: 1,
//     fastDelivery: false,
//     rating: 5,
//   },
//   {
//     id: "P12",
//     name: "Slim Fit Jeans",
//     price: 890,
//     image: "images/product12",
//     inStock: 4,
//     fastDelivery: true,
//     rating: 4,
//   },
//   {
//     id: "P13",
//     name: "Track Pants",
//     price: 650,
//     image: "images/product13",
//     inStock: 0,
//     fastDelivery: true,
//     rating: 3,
//   },
//   {
//     id: "P14",
//     name: "Men Blazer",
//     price: 450,
//     image: "images/product14",
//     inStock: 3,
//     fastDelivery: false,
//     rating: 3,
//   },
//   {
//     id: "P15",
//     name: "Casual Shirt",
//     price: 1000,
//     image: "images/product15",
//     inStock: 5,
//     fastDelivery: true,
//     rating: 5,
//   },
//   {
//     id: "P16",
//     name: "Cotton Shirt",
//     price: 1100,
//     image: "images/product16",
//     inStock: 1,
//     fastDelivery: false,
//     rating: 4,
//   },
//   {
//     id: "P17",
//     name: "Cotton T-shirt",
//     price: 890,
//     image: "images/product17",
//     inStock: 3,
//     fastDelivery: true,
//     rating: 2,
//   },
//   {
//     id: "P18",
//     name: "Joggers Trousers",
//     price: 990,
//     image: "images/product18",
//     inStock: 0,
//     fastDelivery: true,
//     rating: 5,
//   },
//   {
//     id: "P19",
//     name: "Men Kurta",
//     price: 999,
//     image: "images/product19",
//     inStock: 1,
//     fastDelivery: true,
//     rating: 3,
//   },
//   {
//     id: "P20",
//     name: "Slim Fit Shirt",
//     price: 465,
//     image: "images/product20",
//     inStock: 5,
//     fastDelivery: false,
//     rating: 4,
//   },
// ];

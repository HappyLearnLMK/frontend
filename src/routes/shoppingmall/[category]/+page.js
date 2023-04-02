export const load = ({ fetch, params, url }) => {
  const fetchProduct = async (category) => {
    // Do something through API
    // and get data

    return category; // data: "clothes / pants / accessory"
  };

  return {
    productData: fetchProduct(params.category),
  };
};

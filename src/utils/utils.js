
export const formatPrice = (price) => {
  const formattedPrice = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS"
  }).format(price);
  return formattedPrice;
}

export const getProductById = (products, id) => {
  return products.find((product) => product.id === id);
}
const getData = () => {
  return fetch("./data.json")
    .then(response => response.json())
    .then(data =>
      data.products.map(item => {
        return {
          id: item.id,
          name: item.name,
          description: item.description,
          image: item.image,
          price: item.price
        };
      })
    );
};

export default getData;

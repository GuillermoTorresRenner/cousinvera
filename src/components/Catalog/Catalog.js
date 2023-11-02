import ProductCard from "../ProductCard/ProductCard";

const Catalog = ({ products }) => {
  return (
    <div className="grid grid-col-1 md:grid-cols-3 lg:grid-cols-4 lg:grid-rows-3 gap-5 mx-10">
      {products.map((p) => (
        <ProductCard
          titulo={p.title}
          precio={p.price}
          descripcion={p.description}
          alt={p.title}
          img={p.image}
          id={p.id}
          key={p.id}
        />
      ))}
    </div>
  );
};

export default Catalog;

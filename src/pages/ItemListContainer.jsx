import ItemList from "../components/ItemList";

function ItemListContainer({ greeting }) {
  return (
    <div>
      <h1 className="text-center text-4xl font-bold my-10 text-neutral-500">
        {greeting}
      </h1>
      <ItemList />
    </div>
  );
}

export default ItemListContainer;

import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const { data, setIsExpanded, isExpanded, index } = props;
  console.log(data);
  return (
    <div>
      <div
        className="w-6/12 mx-auto bg-gray-50 shadow-lg p-4  my-4"
        onClick={() => setIsExpanded(index)}
      >
        <div className="flex justify-between">
          <span className="font-bold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⌄</span>
        </div>

        {isExpanded ? <ItemList items={data.itemCards} /> : <div></div>}
      </div>
    </div>
  );
};

export default RestaurantCategory;

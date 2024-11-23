import { CDN_URL } from "../utils/constants";

const ItemList = (props) => {
  const { items } = props;
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="mb-4 border-b-2 border-gray-150 text-left"
        >
          <div className="flex justify-between">
            <div>
              <span className="mr-4">{item.card.info.name}</span>
              <span>{`₹${item.card.info.price / 100}`}</span>
            </div>

            <img className="w-20" src={`${CDN_URL}${item.card.info.imageId}`} />
          </div>
          <div className="mb-4 text-sm">{item.card.info.description}</div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

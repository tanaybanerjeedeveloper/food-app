import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = (props) => {
  const { items } = props;

  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addItem(item));
  };

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
            <div>
              <button
                onClick={() => addToCart(item)}
                className="absolute rounded-lg bg-black text-white px-4 py-2"
              >
                ADD
              </button>
              <img
                className="w-20"
                src={`${CDN_URL}${item.card.info.imageId}`}
              />
            </div>
          </div>
          <div className="mb-4 text-sm">{item.card.info.description}</div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;

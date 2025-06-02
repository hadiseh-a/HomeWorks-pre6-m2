import { produce } from "immer";

const initialState = { price: 0.00 };

const reducer = (state = initialState, action) =>
  produce(state, (draft) => {
    if (action.type === "CHANGE-PRICE") {
      draft.price = draft.price + parseFloat(action.payload);
    }
  });
export default reducer;

import { CHANGE_PRICE } from "./actions";
export const changePriceBasket = (data) => {
  return {
    type: CHANGE_PRICE,
    payload: data,
  };
};

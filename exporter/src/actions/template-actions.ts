import { TEMPLATE_ACTION } from "../utils/ActionTypes";

export const templateAction = (id: number) => ({
  type: TEMPLATE_ACTION,
  payload: {
    id,
  },
});

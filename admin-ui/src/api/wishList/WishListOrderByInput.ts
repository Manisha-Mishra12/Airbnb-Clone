import { SortOrder } from "../../util/SortOrder";

export type WishListOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  listingsId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};

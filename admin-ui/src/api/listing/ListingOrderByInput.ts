import { SortOrder } from "../../util/SortOrder";
import { User } from "../user/User";

export type ListingOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  User?: SortOrder;
  locationData?: SortOrder;
  locationType?: SortOrder;
  mapData?: SortOrder;
  photos?: SortOrder;
  placeAmenties?: SortOrder;
  placeSpace?: SortOrder;
  placeType?: SortOrder;
  price?: SortOrder;
  title?: SortOrder;
  tripId?: SortOrder;
  updatedAt?: SortOrder;
  wishListId?: SortOrder;
};

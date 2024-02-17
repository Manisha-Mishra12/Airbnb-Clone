import { User } from "../user/User";
import { JsonValue } from "type-fest";
import { Trip } from "../trip/Trip";
import { WishList } from "../wishList/WishList";

export type Listing = {
  createdAt: Date;
  description: string;
  id: string;
  listingCreatedBy?: User;
  locationData: JsonValue;
  locationType: string;
  mapData: JsonValue;
  photos: JsonValue;
  placeAmenties: JsonValue;
  placeSpace: JsonValue;
  placeType: string;
  price: number;
  title: string;
  trip?: Trip | null;
  updatedAt: Date;
  wishList?: WishList;
};

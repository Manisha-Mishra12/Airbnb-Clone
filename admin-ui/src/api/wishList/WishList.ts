import { Listing } from "../listing/Listing";
import { User } from "../user/User";

export type WishList = {
  createdAt: Date;
  id: string;
  listings?: Listing | null;
  updatedAt: Date;
  user?: User;
};

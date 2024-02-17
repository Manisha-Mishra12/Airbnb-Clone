import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishListCreateInput = {
  listings: ListingWhereUniqueInput | null;
  user: UserWhereUniqueInput;
};

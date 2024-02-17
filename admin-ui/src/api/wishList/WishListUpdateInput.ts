import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishListUpdateInput = {
  listings?: ListingWhereUniqueInput | null;
  user?: UserWhereUniqueInput;
};

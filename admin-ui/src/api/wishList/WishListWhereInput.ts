import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type WishListWhereInput = {
  id?: StringFilter;
  listings?: ListingWhereUniqueInput;
  user?: UserWhereUniqueInput;
};

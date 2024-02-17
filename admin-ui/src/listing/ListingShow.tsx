import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
} from "react-admin";
import { USER_TITLE_FIELD } from "../user/UserTitle";
import { TRIP_TITLE_FIELD } from "../trip/TripTitle";
import { WISHLIST_TITLE_FIELD } from "../wishList/WishListTitle";

export const ListingShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="Description" source="description" />
        <TextField label="ID" source="id" />
        <ReferenceField
          label="ListingCreatedBy"
          source="user.id"
          reference="User"
        >
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="LocationData" source="locationData" />
        <TextField label="LocationType" source="locationType" />
        <TextField label="MapData" source="mapData" />
        <TextField label="Photos" source="photos" />
        <TextField label="PlaceAmenties" source="placeAmenties" />
        <TextField label="PlaceSpace" source="placeSpace" />
        <TextField label="PlaceType" source="placeType" />
        <TextField label="Price" source="price" />
        <TextField label="Title" source="title" />
        <ReferenceField label="Trips" source="trip.id" reference="Trip">
          <TextField source={TRIP_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField
          label="WishLists"
          source="wishlist.id"
          reference="WishList"
        >
          <TextField source={WISHLIST_TITLE_FIELD} />
        </ReferenceField>
      </SimpleShowLayout>
    </Show>
  );
};

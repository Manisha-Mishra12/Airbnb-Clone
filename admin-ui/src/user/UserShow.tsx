import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { USER_TITLE_FIELD } from "./UserTitle";
import { TRIP_TITLE_FIELD } from "../trip/TripTitle";
import { WISHLIST_TITLE_FIELD } from "../wishList/WishListTitle";
import { LISTING_TITLE_FIELD } from "../listing/ListingTitle";

export const UserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="First Name" source="firstName" />
        <TextField label="ID" source="id" />
        <TextField label="Last Name" source="lastName" />
        <TextField label="Roles" source="roles" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="Username" source="username" />
        <ReferenceManyField reference="Listing" target="User" label="Listings">
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField reference="Trip" target="userId" label="Trips">
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="listings"
              source="listing.id"
              reference="Listing"
            >
              <TextField source={LISTING_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="Tripinfo" source="tripinfo" />
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="User" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="WishList"
          target="userId"
          label="WishLists"
        >
          <Datagrid rowClick="show">
            <DateField source="createdAt" label="Created At" />
            <TextField label="ID" source="id" />
            <ReferenceField
              label="listings"
              source="listing.id"
              reference="Listing"
            >
              <TextField source={LISTING_TITLE_FIELD} />
            </ReferenceField>
            <DateField source="updatedAt" label="Updated At" />
            <ReferenceField label="user" source="user.id" reference="User">
              <TextField source={USER_TITLE_FIELD} />
            </ReferenceField>
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};

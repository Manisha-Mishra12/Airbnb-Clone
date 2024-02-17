import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";

import { UserTitle } from "../user/UserTitle";
import { TripTitle } from "../trip/TripTitle";
import { WishListTitle } from "../wishList/WishListTitle";

export const ListingCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Description" multiline source="description" />
        <ReferenceInput
          source="listingCreatedBy.id"
          reference="User"
          label="ListingCreatedBy"
        >
          <SelectInput optionText={UserTitle} />
        </ReferenceInput>
        <div />
        <TextInput label="LocationType" source="locationType" />
        <div />
        <div />
        <div />
        <div />
        <TextInput label="PlaceType" source="placeType" />
        <NumberInput label="Price" source="price" />
        <TextInput label="Title" source="title" />
        <ReferenceInput source="trip.id" reference="Trip" label="Trips">
          <SelectInput optionText={TripTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="wishList.id"
          reference="WishList"
          label="WishLists"
        >
          <SelectInput optionText={WishListTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};

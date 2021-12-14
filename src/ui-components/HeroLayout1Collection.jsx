/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import HeroLayout1 from "./HeroLayout1";
import { Collection } from "@aws-amplify/ui-react";
export default function HeroLayout1Collection(props) {
  const { items, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  return (
    <Collection
      type="list"
      justifyContent="stretch"
      direction="column"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <HeroLayout1
          key={item.id}
          {...getOverrideProps(overrides, "Collection.HeroLayout1[0]")}
        ></HeroLayout1>
      )}
    </Collection>
  );
}

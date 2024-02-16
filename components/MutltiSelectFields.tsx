import React, { forwardRef, useCallback } from "react";
import AsyncSelect from "react-select/async";
import Fieldset from "part:@sanity/components/fieldsets/default";
import PatchEvent, { set, unset } from "@sanity/form-builder/PatchEvent";

import { useId } from "@reach/auto-id";

const createPatchFrom = (value) =>
  PatchEvent.from(value === "" ? unset() : set(value));

const MultiSelectFields = forwardRef((props, ref) => {
  const {
    type: { title, description },
    value,
    markers,
    level,
    onChange,
  } = props;

  const loadOptions = (_, callback) => {
    const options = [
      {
        label: "firstName",
        value: "firstName",
        title: "First Name",
      },
      {
        label: "lastName",
        value: "lastName",
        title: "Last Name",
      },
      {
        label: "phoneNumber",
        value: "phoneNumber",
        title: "Phone Number",
      },
      {
        label: "email",
        value: "email",
        title: "Email",
      },
      {
        label: "address",
        value: "address",
        title: "Address",
      },
      {
        label: "discord",
        value: "discord",
        title: "Discord",
      },
      {
        label: "walletAddress",
        value: "walletAddress",
        title: "Wallet Address",
      },
    ];

    callback(options);
  };

  const handleChange = useCallback(
    (values) => {
      onChange(createPatchFrom(values));
    },
    [onChange]
  );
  const inputId = useId();

  return (
    <Fieldset
      legend={title}
      description={description}
      markers={markers}
      level={level}
      inputId={inputId}
    >
      <AsyncSelect
        id={inputId}
        value={value}
        cacheOptions
        isMulti
        defaultOptions
        loadOptions={loadOptions}
        onChange={handleChange}
      />
    </Fieldset>
  );
});

export default MultiSelectFields;

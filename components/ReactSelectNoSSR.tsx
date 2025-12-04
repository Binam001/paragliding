"use client";
import dynamic from "next/dynamic";
import { JSX } from "react";
import { Props, GroupBase } from "react-select";

const Select = dynamic(() => import("react-select"), { ssr: false });

export default Select as <
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
>(
  props: Props<Option, IsMulti, Group>
) => JSX.Element;

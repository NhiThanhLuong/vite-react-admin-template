import { ReactElement } from "react";

type TnavsChild = {
  key: string;
  label: string;
  element?: ReactElement;
  hidden?: true;
};

export type Tnavs = TnavsChild & {
  children?: TnavsChild[];
};

type TrouteChild = Pick<TnavsChild, "element"> & {
  path: string;
};

export type Troutes = TrouteChild & {
  children?: TrouteChild[];
};

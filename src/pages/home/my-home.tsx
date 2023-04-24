import { FILTER_SCHEMA_PAGE_LIST } from "@/data/constant";
import { useFilter } from "@/hooks/use-filter";
import dayjs from "dayjs";
import { Button } from "antd";
import React, { FC } from "react";
import { TFilterSchema } from "@/ts/types/filter";
import { FilterWrapper } from "@/components";

const now = dayjs();
const filtersChema: TFilterSchema[] = [
  {
    name: "name",
    type: "string",
    element: "input",
  },
  {
    name: "usedFromDateOnly",
    type: "date",
    element: "date",
    defaultValue: now.subtract(7, "day"),
  },
  {
    name: "usedToDateOnly",
    type: "date",
    element: "date",
    defaultValue: now,
  },
  ...(FILTER_SCHEMA_PAGE_LIST as TFilterSchema[]),
];

const MyHome: FC = () => {
  const { filter, schemaList, onFilterChange, onResetFilter } =
    useFilter(filtersChema);
  console.log(filter, schemaList);

  const handlePageChange = ({ current, pageSize }: any) => {
    onFilterChange({ perPage: pageSize, page: current });
  };

  return (
    <div>
      <FilterWrapper
        onReset={onResetFilter}
        onChange={onFilterChange}
        schemaList={schemaList}
      />
      My Home 123
      <div className="">
        <Button
          onClick={() =>
            handlePageChange({
              current: 2,
              pageSize: 10,
            })
          }
        >
          Click
        </Button>
        <Button onClick={onResetFilter}>Reset</Button>
      </div>
    </div>
  );
};

export default MyHome;

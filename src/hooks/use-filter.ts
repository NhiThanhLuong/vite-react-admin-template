import _ from 'lodash';
import { useMemo } from 'react';

import { DEFAULT_PAGINATION } from '@/data/constant';
import { TFilterSchema } from '@/ts/types/filter';
import { findObjInArrByKey } from '@/utils/array';
import dayjs from 'dayjs';
import { useCustomSearchParams } from './use-custom-search-params';

// type IType = "string" | "number" | "date" | "array" | "boolean";

export const useFilter = (filterSchema: TFilterSchema[]) => {
  const { paramsRouter, setParamsRouter } = useCustomSearchParams();

  //   setParamsRouter({
  //     page: "1",
  //   });

  const schemaList = useMemo(
    () =>
      filterSchema
        .map(({ type, defaultValue, ...rest }) => ({
          ...rest,
        }))
        .filter(({ element }) => !!element),
    [filterSchema]
  );

  const TypeSchemaList = typeof schemaList;

  const filter = useMemo(() => {
    const result = {} as { [key: string]: K };

    for (const keyParam in paramsRouter) {
      const filterItem = findObjInArrByKey(filterSchema, keyParam, 'name') as
        | TFilterSchema
        | undefined;

      if (!filterItem) continue;

      result[keyParam] = formatValueWithType(
        paramsRouter[keyParam],
        filterItem
      );
    }

    return result;
  }, [filterSchema, paramsRouter]);

  const apiFilter = useMemo(() => {
    return formatFilterBeforeSyncURL(filter);
  }, [filter]);

  const onResetFilter = () => {
    setParamsRouter({});
  };

  const onFilterChange = (newFilter: any) => {
    const cloneFilter = _.cloneDeep(newFilter);
    if (!cloneFilter.page) {
      cloneFilter.page = DEFAULT_PAGINATION.page;
    }

    setParamsRouter({
      ...filter,
      ...cloneFilter,
    });
  };

  return {
    schemaList,
    filter,
    apiFilter,
    onFilterChange,
    onResetFilter,
    TypeSchemaList,
  };
};

export const formatValueWithType = (
  value: string,
  { defaultValue, type }: TFilterSchema
) => {
  if (!value) return defaultValue;
  try {
    if (type === 'number') return Number(value);
    // if (type === "boolean") return value === "true" ? true : false;
    if (type === 'date') return dayjs(value).format('DD/MM/YYYYTHH:mm:ss');
    // if (type === "array")
    //   return value
    //     .split(",")
    //     .map((item) => (itemType === "string" ? item : Number(item)));
    if (type === 'string') return value;
  } catch (error) {
    return;
  }
};
type K = ReturnType<typeof formatValueWithType>;

export const formatFilterBeforeSyncURL = (filter: { [key: string]: K }) => {
  const cloneFilter = _.cloneDeep(filter);
  for (const filterKey in cloneFilter) {
    const filterValue = cloneFilter[filterKey];

    // process invalid value
    if (
      (!filterValue && filterValue !== 0) ||
      (_.isArray(filterValue) && filterValue.length) === 0 ||
      filterValue === '[]'
    ) {
      delete cloneFilter[filterKey];
      continue;
    }

    if (_.isArray(filterValue)) {
      cloneFilter[filterKey] = filterValue.join(',');
      continue;
    }

    // process date
    if (dayjs.isDayjs(filterValue)) {
      cloneFilter[filterKey] = dayjs(filterValue).format('YYYY-MM-DD HH:mm:ss');
      continue;
    }
  }

  return cloneFilter as { [key: string]: NonNullable<K> };
};

import { createSearchParams, useSearchParams } from 'react-router-dom';

export const useCustomSearchParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const paramsRouter = Object.fromEntries([...searchParams]);

  const setParamsRouter = (params: typeof paramsRouter): void => {
    setSearchParams(createSearchParams(params));
  };

  return { paramsRouter, setParamsRouter };
};

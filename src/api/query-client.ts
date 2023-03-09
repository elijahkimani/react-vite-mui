import { QueryClient } from "@tanstack/react-query";

const twentyFourHoursInMs = 1000 * 60 * 60 * 24;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 2,
      // staleTime: twentyFourHoursInMs,
    },
  },
});

import {
  List,
  ListItem,
  Skeleton,
  SkeletonOwnProps,
  Stack,
} from "@mui/material";
import {
  DefinedInitialDataOptions,
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";
import { JSX } from "react/jsx-runtime";

export default function SkeletonExample() {
  return (
    <>
      <QueryClientProvider client={new QueryClient()}>
        <AlbumsWithSkeleton />
      </QueryClientProvider>
    </>
  );
}

const getAlbums = async (): Promise<
  {
    userId: number;
    id: number;
    title: string;
  }[]
> =>
  new Promise((resolve) => setTimeout(resolve, 500))
    .then(() => fetch("http://jsonplaceholder.typicode.com/albums"))
    .then((res) => res.json());

type Album = {
  userId: number;
  id: number;
  title: string;
};

function Albums({ data }: { data: Album[] }) {
  return (
    <List>
      {data.map((a) => (
        <ListItem key={a.id}>{a.title}</ListItem>
      ))}
    </List>
  );
}

const WaitWithSkeleton = <T,>(
  skeletonProps: SkeletonOwnProps & { times?: number },
  WrappedComponent: ({ data }: { data: T }) => JSX.Element,
  options: Omit<DefinedInitialDataOptions<T>, "initialData">
) => {
  const { data, isLoading } = useQuery(options);

  if (isLoading && !data) {
    return (
      <Stack spacing={1}>
        {Array.from({ length: skeletonProps.times ?? 1 }).map((_, i) => (
          <Skeleton
            {...skeletonProps}
            key={i}
            sx={{
              ...skeletonProps.sx,
              width: `${Math.floor(Math.random() * 100) + 50}%`,
            }}
          />
        ))}
      </Stack>
    );
  }

  return <WrappedComponent data={data!} />;
};

function AlbumsWithSkeleton() {
  return WaitWithSkeleton(
    { variant: "text", times: 20, sx: { fontSize: "1rem" } },
    Albums,
    {
      queryKey: ["albums"],
      queryFn: getAlbums,
    }
  );
}

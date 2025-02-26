import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import usePagination from "@mui/material/usePagination";

export default function PaginationExample() {
  return (
    <Stack spacing={2}>
      <Basic />
      <CustomHook />
    </Stack>
  );
}

function Basic() {
  return (
    <>
      <Pagination count={10} />
      <Pagination count={10} color="primary" />
      <Pagination count={10} variant="outlined" color="secondary" />
      <Pagination count={10} disabled />
    </>
  );
}

const List = styled("ul")({
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
});

function CustomHook() {
  const { items } = usePagination({
    count: 10,
  });

  return (
    <nav style={{ marginTop: "2rem" }}>
      <List>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;

          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button
                type="button"
                style={{
                  fontWeight: selected ? "bold" : undefined,
                }}
                {...item}
              >
                {page}
              </button>
            );
          } else {
            children = (
              <button type="button" {...item}>
                {type}
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </List>
    </nav>
  );
}

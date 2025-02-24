import { createBrowserRouter } from "react-router";
import App from "./App";
import AutoCompleteExample from "./components/AutoCompleteExample";
import ButtonExample from "./components/ButtonExample";
import SkeletonExample from "./components/SkeletonExample";
import TableExample from "./components/TableExample";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "auto-complete-example",
        element: <AutoCompleteExample />,
      },
      {
        path: "button-example",
        element: <ButtonExample />,
      },
      {
        path: "skeleton-example",
        element: <SkeletonExample />,
      },
      {
        path: "table-example",
        element: <TableExample />,
      },
    ],
  },
]);

export default router;

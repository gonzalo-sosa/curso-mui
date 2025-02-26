import { createBrowserRouter } from "react-router";
import App from "./App";
import CustomizationExample from "./components/CustomizationExample";
import CustomThemeExample from "./components/CustomThemeExample";
import TableExample from "./components/data_display/TableExample";
import TooltipExample from "./components/data_display/TooltipExample";
import TypographyExample from "./components/data_display/TypographyExample";
import AlertExample from "./components/feedback/AlertExample";
import DialogExample from "./components/feedback/DialogExample";
import SkeletonExample from "./components/feedback/SkeletonExample";
import AutoCompleteExample from "./components/inputs/AutoCompleteExample";
import ButtonExample from "./components/inputs/ButtonExample";
import ButtonGroupExample from "./components/inputs/ButtonGroupExample";
import CheckboxExample from "./components/inputs/CheckboxExample";
import RadioGroupExample from "./components/inputs/RadioGroupExample";
import TextFieldExample from "./components/inputs/TextFieldExample";
import ImageListExample from "./components/layout/ImageListExample";
import DrawerExample from "./components/navigation/DrawerExample";
import PaginationExample from "./components/navigation/PaginationExample";
import AppBarExample from "./components/surfaces/AppBarExample";
import CardExample from "./components/surfaces/CardExample";
import ModalExample from "./components/utils/ModalExample";
import PopoverExample from "./components/utils/PopoverExample";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "components",
        children: [
          {
            path: "custom-theme-example",
            element: <CustomThemeExample />,
          },

          {
            path: "customization-example",
            element: <CustomizationExample />,
          },
          {
            path: "inputs",
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
                path: "button-group-example",
                element: <ButtonGroupExample />,
              },
              {
                path: "checkbox-example",
                element: <CheckboxExample />,
              },
              {
                path: "radio-group-example",
                element: <RadioGroupExample />,
              },
              {
                path: "text-field-example",
                element: <TextFieldExample />,
              },
            ],
          },
          {
            path: "data_display",
            children: [
              {
                path: "typography-example",
                element: <TypographyExample />,
              },
              {
                path: "tooltip-example",
                element: <TooltipExample />,
              },
              {
                path: "table-example",
                element: <TableExample />,
              },
            ],
          },
          {
            path: "feedback",
            children: [
              {
                path: "alert-example",
                element: <AlertExample />,
              },
              {
                path: "dialog-example",
                element: <DialogExample />,
              },
              {
                path: "skeleton-example",
                element: <SkeletonExample />,
              },
            ],
          },
          {
            path: "surfaces",
            children: [
              {
                path: "app-bar-example",
                element: <AppBarExample />,
              },
              {
                path: "card-example",
                element: <CardExample />,
              },
            ],
          },
          {
            path: "navigation",
            children: [
              {
                path: "drawer-example",
                element: <DrawerExample />,
              },
              {
                path: "pagination-example",
                element: <PaginationExample />,
              },
            ],
          },
          {
            path: "layout",
            children: [
              {
                path: "image-list-example",
                element: <ImageListExample />,
              },
            ],
          },
          {
            path: "utils",
            children: [
              {
                path: "modal-example",
                element: <ModalExample />,
              },
              {
                path: "popover-example",
                element: <PopoverExample />,
              },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;

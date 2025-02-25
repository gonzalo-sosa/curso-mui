import { createBrowserRouter } from "react-router";
import App from "./App";
import AlertExample from "./components/AlertExample";
import AppBarExample from "./components/AppBarExample";
import AutoCompleteExample from "./components/AutoCompleteExample";
import ButtonExample from "./components/ButtonExample";
import ButtonGroupExample from "./components/ButtonGroupExample";
import CardExample from "./components/CardExample";
import CheckboxExample from "./components/CheckboxExample";
import CustomizationExample from "./components/CustomizationExample";
import CustomThemeExample from "./components/CustomThemeExample";
import DialogExample from "./components/DialogExample";
import RadioGroupExample from "./components/RadioGroupExample";
import SkeletonExample from "./components/SkeletonExample";
import { TableExample } from "./components/TableExample";
import TextFieldExample from "./components/TextFieldExample";
import TooltipExample from "./components/TooltipExample";
import TypographyExample from "./components/TypographyExample";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>404</h1>,
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
        path: "skeleton-example",
        element: <SkeletonExample />,
      },
      {
        path: "text-field-example",
        element: <TextFieldExample />,
      },
      {
        path: "typography-example",
        element: <TypographyExample />,
      },
      {
        path: "app-bar-example",
        element: <AppBarExample />,
      },
      {
        path: "card-example",
        element: <CardExample />,
      },
      {
        path: "dialog-example",
        element: <DialogExample />,
      },
      {
        path: "radio-group-example",
        element: <RadioGroupExample />,
      },
      {
        path: "checkbox-example",
        element: <CheckboxExample />,
      },
      {
        path: "custom-theme-example",
        element: <CustomThemeExample />,
      },
      {
        path: "alert-example",
        element: <AlertExample />,
      },
      {
        path: "table-example",
        element: <TableExample />,
      },
      {
        path: "tooltip-example",
        element: <TooltipExample />,
      },
      {
        path: "customization-example",
        element: <CustomizationExample />,
      },
    ],
  },
]);

export default router;

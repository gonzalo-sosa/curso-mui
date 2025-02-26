import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton, Tooltip, TooltipProps } from "@mui/material";
import { ComponentProps } from "react";

export default function TooltipExample() {
  return (
    <>
      <Tooltip
        title="Delete"
        placement="left"
        arrow
        enterDelay={500}
        leaveDelay={200}
      >
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      <IconButtonWithTooltip>
        <DeleteIcon />
      </IconButtonWithTooltip>
    </>
  );
}

function withTooltip<T extends object>(
  WrappedComponent: React.ComponentType<T>,
  tooltipProps: Omit<TooltipProps, "children">
): React.FC<T> {
  return function ComponentWithTooltip(props: T) {
    return (
      <Tooltip {...tooltipProps}>
        <WrappedComponent {...props} />
      </Tooltip>
    );
  };
}

function IconButtonWithTooltip(props: ComponentProps<typeof IconButton>) {
  return withTooltip(IconButton, {
    title: "Delete",
    placement: "right",
    arrow: true,
    enterDelay: 500,
    leaveDelay: 200,
  })(props);
}

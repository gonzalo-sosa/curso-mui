import { Button, Stack, Typography } from "@mui/material";
import { NavLink } from "react-router";

interface TreeNode {
  name: string;
  children: TreeNode[];
  path?: string;
}

const camelToKebab = (str: string) =>
  str
    .split("/")
    .map((segment) =>
      segment
        .replace(/([A-Z])/g, "-$1")
        .replace(/^-/, "")
        .toLowerCase()
    )
    .join("/");

const buildTree = (items: string[]): TreeNode[] => {
  const root: TreeNode[] = [];

  items.forEach((item) => {
    const segments = item.split("/");
    let currentLevel = root;

    segments.forEach((segment, index) => {
      let node = currentLevel.find((n) => n.name === segment);

      if (!node) {
        node = {
          name: segment,
          children: [],
          path: index === segments.length - 1 ? item : undefined,
        };
        currentLevel.push(node);
      }

      currentLevel = node.children;
    });
  });

  return root;
};

const TreeItem = ({ node }: { node: TreeNode }) => (
  <Stack gap={1}>
    {node.children.length > 0 ? (
      <>
        <Typography marginTop={1} variant="subtitle2" px={1} fontWeight="bold">
          {node.name}
        </Typography>
        <Stack pl={2}>
          {node.children.map((child) => (
            <TreeItem key={child.name} node={child} />
          ))}
        </Stack>
      </>
    ) : (
      <Button
        sx={{ justifyContent: "flex-start", textTransform: "none" }}
        component={NavLink}
        to={camelToKebab(node.path || "")}
      >
        {node.name}
      </Button>
    )}
  </Stack>
);

interface SideBarProps {
  items: string[];
}

export default function SideBar({ items }: SideBarProps) {
  const tree = buildTree(items);

  return (
    <Stack
      component="nav"
      role="navigation"
      p={2}
      bgcolor={"grey.100"}
      width={"fit-content"}
      sx={{ borderRadius: 1 }}
    >
      {tree.map((node) => (
        <TreeItem key={node.name} node={node} />
      ))}
    </Stack>
  );
}

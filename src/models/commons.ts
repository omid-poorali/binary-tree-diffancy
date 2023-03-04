export type GraphNode = {
  label: string | null;
  children: [GraphNode | null, GraphNode | null];
};

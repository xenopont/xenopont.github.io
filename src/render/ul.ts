type ulParams = {
  items: string[];
};

export const ul = (params: ulParams): string => {
  return `<ul>
  ${params.items.map((item) => item).join("\n")}
</ul>`;
};

type h1Params = {
  content: string;
};

export const h1 = ({ content }: h1Params): string => {
  return `<h1>${content}</h1>`;
};

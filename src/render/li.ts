type liParams = {
  content: string;
};

export const li = ({ content }: liParams): string => {
  return `<li>${content}</li>`;
};

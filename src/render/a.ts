type aParams = {
  href: string;
  content: string;
};

export const a = ({ href, content }: aParams): string => {
  return `<a href="${href}">${content}</a>`;
};

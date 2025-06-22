export const xElement = (tagName: keyof HTMLElementTagNameMap): HTMLElement => {
  return document.createElement(tagName);
};

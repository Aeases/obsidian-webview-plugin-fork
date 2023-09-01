export const fragWithHTML = (html: string) =>
  createFragment((frag) => (frag.createDiv().innerHTML = html));
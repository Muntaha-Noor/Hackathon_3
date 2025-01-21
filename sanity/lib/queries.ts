export const searchQuery = (searchTerm: string): string => `
  *[_type == "products" && title match "${searchTerm}*"] {
    _id,
    title,
    slug,
  }
`;

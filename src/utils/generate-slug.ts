export const generateSlug = (text: string): string => {
  // Remove accents from the text
  const normalizedText = text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  // Replace spaces and symbols with hyphens
  const slug = normalizedText
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");

  return slug;
};

import inflection from "inflection";
// import generate from "nanoid/generate";

export const getNounNames = (name = "") => {
  return {
    name,
    singularName: inflection.singularize(name),
    pluralName: inflection.pluralize(name),
    titleizeName: inflection.titleize(name)
  };
};
export const filterCaseInsensitive = (filter, row) => {
  // debugger
  const id = filter.pivotId || filter.id;
  const content = row[id];
  if (typeof content !== 'undefined') {
    // filter by text in the table or if it's a object, filter by key
    if (typeof content === 'object' && content !== null && content.key) {
      return String(content.key).toLowerCase().includes(filter.value.toLowerCase());
    } else {
      return String(content).toLowerCase().includes(filter.value.toLowerCase());
    }
  }

  return true;
};
// export const generateUUID = (length = 22, options = { numericOnly: false }) => {
//   let textPattern =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let numericOnlyPattern = "0123456789";

//   const pattern =
//     options && options.numericOnly ? numericOnlyPattern : textPattern;

//   let text = generate(pattern, length);
//   return text;
// };

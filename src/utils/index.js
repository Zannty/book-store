export const compose = (...funcs) => component => {
  return funcs.reduceRight((wrap, func) => func(wrap), component);
};

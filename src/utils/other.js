export const is_filter_by_name_in_title = (list, value) => {
  const is_found = list.filter(
    (element) => element.title.toLowerCase() === value.toLowerCase()
  ).length;
  if (is_found === 0) {
    return false;
  } else if (is_found > 0) {
    return true;
  }
};

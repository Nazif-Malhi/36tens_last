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

export const is_filter_comp_name_modal_feilds = (list, title, type, def) => {
  const is_found = list.filter(
    (element) =>
      element.title.toLowerCase() === title.toLowerCase() &&
      element.type.toLowerCase() === type.toLowerCase() &&
      element.defination.toLowerCase() === def.toLowerCase()
  ).length;
  if (is_found === 0) {
    return false;
  } else if (is_found > 0) {
    return true;
  }
};

export const is_filter_to_add_in_statment = (
  list,
  type,
  competency_title,
  statement
) => {
  const is_found = list.filter(
    (element) =>
      element.type.toLowerCase() === type.toLowerCase() &&
      element.competency_title.toLowerCase() ===
        competency_title.toLowerCase() &&
      element.statement.toLowerCase() === statement.toLowerCase()
  ).length;
  if (is_found === 0) {
    return false;
  } else if (is_found > 0) {
    return true;
  }
};


export const first_letter_capitalize = (value) => {
  return value.charAt(0).toUpperCase()+value.slice(1);
}

export const isNumber = (value) => {
  return value.replace(/\D/g,'')
}

export const set_profile_badge_name = (first_name, last_name) => {
  if((first_name.length+last_name.length) > 8){
    console.log(6)
  }
}

export const check_date = (date) => {
  console.log(date);
}
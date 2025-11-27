export const saveInStorage = (key, element) => {
  let items = JSON.parse(localStorage.getItem(key));
  //   console.log(items);

  if (Array.isArray(items)) {
    items.push(element);
  } else {
    items = [element];
  }

  localStorage.setItem(key, JSON.stringify(items));

  return element;
};

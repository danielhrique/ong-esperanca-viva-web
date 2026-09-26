export function saveData(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

export function getData(key) {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
}

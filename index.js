const myEach = (collection, alert) => {
  Object.values(collection).forEach((e) => alert(e));
  return collection;
};
const myMap = (collection, callback) => {
  const arrResult = [];
  Object.values(collection).forEach((e) => arrResult.push(callback(e)));
  return arrResult;
};

const myReduce = (collection, callback, acc) => {
  let values = Object.values(collection);
  if (acc === undefined) {
    acc = values[0];
    values = values.slice(1);
  }
  values.forEach((val) => {
    acc = callback(acc, val, collection);
  });
  return acc;
};

const myFind = (collection, predicate) => {
  const result = Object.values(collection).find((e) => predicate(e));
  if (result === undefined) {
    return undefined;
  }
  return result;
};

const myFilter = (collection, predicate) => {
  const filterResult = Object.values(collection).filter((e) => predicate(e));
  if (filterResult === []) {
    return [];
  }
  return filterResult;
};

const mySize = (collection) => {
  const values = Object.values(collection);
  let count = 0;
  for (let i = 0; i < values.length; i++) {
    count++;
  }
  return count;
};

const myFirst = (array, elements) => {
  if (elements === undefined) {
    return array[0];
  }
  return array.slice(0, elements);
};

const myLast = (array, elements) => {
  if (elements === undefined) {
    return array[array.length - 1];
  }
  return array.slice(-elements);
};

const myKeys = (object) => {
  const keys = Object.keys(object);
  return keys;
};

const myValues = (object) => {
  const values = Object.values(object);
  return values;
};

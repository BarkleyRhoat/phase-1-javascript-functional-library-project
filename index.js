const myEach = (collection, alert) => {
  Object.values(collection).forEach((e) => alert(e));
  console.log("my collection results:", collection);
  return collection;
};
const myMap = (collection, callback) => {
  const arrResult = [];
  Object.values(collection).forEach((e) => arrResult.push(callback(e)));
  console.log("my array results:", arrResult);
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

// 1: 计算每个元素出现的次数
let names = ["peter", "tom", "mary", "bob", "tom", "peter"];

let nameNum = names.reduce((mapObj, cur) => {
  // console.info("map--->", mapObj);
  if (mapObj.has(cur)) {
    mapObj.set(cur, mapObj.get(cur) + 1);
  } else {
    mapObj.set(cur, 1);
  }
  return mapObj;
}, new Map());

// console.info("nameNum--->", nameNum);

// 2数组去重
var arr = [1, 2, 3, 1, 2, 4, 4, 5];

let setArr = arr.reduce((setArr, cur) => {
  if (!setArr.includes(cur)) {
    setArr.push(cur);
  }
  return setArr;
}, []);

// console.info("setArr-->", setArr);

// 3:将多维数组转化为一维数组

let arr1 = [
  [0, 1],
  [2, 3],
  [4, [5, 6, 7]],
];

const newArr = function (arr) {
  return arr.reduce(
    (itemArr, cur) => itemArr.concat(Array.isArray(cur) ? newArr(cur) : [cur]),
    []
  );
};

console.info("newArr--->", newArr(arr1));

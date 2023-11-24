import _ from "lodash";

const str = "I drink coffee~";
const newStr = _.camelCase(str);
console.log(newStr);

const nums = [1, 2, 3, 2, 2, 4];
const newNums = _.uniq(nums);
console.log(newNums);

const obj = {
  a: { x: 1 },
  b: [7, 8],
};

const newObj = _.cloneDeep(obj);
console.log(newObj);

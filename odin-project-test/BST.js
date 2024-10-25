const arrayUnsorted12 = [11, 2, 9, 1, 10, 8, 5, 4, 3, 12, 6, 7];
const arrayUnsorted = [2, 9, 1, 8, 5, 4, 3, 6, 7];

const mergeSort = (array) => {
  if (array.length === 1) {
    return array;
  }
  const mid = Math.floor(array.length / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const array = mergeSort(arrayUnsorted);
const array2 = mergeSort(arrayUnsorted12);

const Tree = (array) => {
  class Node {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  const buildTree = (set, start = 0, end = set.length - 1) => {
    if (start > end) return null;
    const mid = Math.floor((start + end) / 2);
    const root = new Node(set[mid]);
    root.left = buildTree(set, start, mid - 1);
    root.right = buildTree(set, mid + 1, end);
    return root;
  };

  const root = buildTree(array);
  return root;
};

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};

const root = Tree(array);
prettyPrint(root);
console.log(" ");
console.log(" ");
console.log(" ");

const root2 = Tree(array2);
prettyPrint(root2);

const searchTreeDFS = (root, value) => {
  if (root === null) return false;
  if (root.value === value) return root.value;
  if (value < root.value) {
    return searchTreeDFS(root.left, value);
  }
  return searchTreeDFS(root.right, value);
};

const searchTreeBFS = (root, value) => {
  if (root === null) return false;
  const queue = [root];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current.value === value) return true;
    if (current.left) queue.push(current.left);
    if (current.right) queue.push(current.right);
  }
  return false;
};

const searchThisValue = 5;

console.log(searchTreeBFS(root, searchThisValue));
console.log(searchTreeBFS(root2, searchThisValue));

console.log(searchTreeDFS(root, searchThisValue));
console.log(searchTreeDFS(root2, searchThisValue));

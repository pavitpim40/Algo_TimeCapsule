function dfs(root, arr) {
  if (!root) return;
  dfs(root.left);
  arr.push(root.value);
  dfs(root.right);
  return arr;
}

function inorderTraversal(root) {
  return dfs(root, []);
}

// P'Meow
function inOrderTraversal(root) {
  const result = [];
  function dfs(node) {
    if (!node) return null;
    dfs(node.left);
    result.push(node.value);
    dfs(node.right);
  }
  dfs(root);
  return result;
}

// function inOrderTraversal(root){
//    return dfs(root,[])
// }
// function inOrderTraversal(root) {
//   if (!root) return [];
//   const stack = [];
//   const result = [];
//   let currentNode = root;
//   while (stack.length > 0 || currentNode) {
//       while (currentNode) {
//           stack.push(currentNode);
//           currentNode = currentNode.left;
//       }
//       currentNode = stack.pop();
//       result.push(currentNode.value);
//       currentNode = currentNode.right;
//   }
//   return result;
// }
// const result = inOrderTraversal(root)
// console.log(result) // [2, 1, 3]

// P'tod

var root1 = {
  value: 1,
  left: {
    value: 2,
    left: {
      value: 5,
    },
    right: {
      value: 4,
    },
  },
  right: {
    value: 3,
    left: {
      value: 6,
    },
    right: {
      value: 7,
    },
  },
};
// console.log(inOrderTraversal(root1)) // 5 2 4 1 6 3 7

/*
           1
          / \
         2   3
       5  4 6  7

*/

function inOrderTraversal1(root) {
  const result = [];
  const stack = [];
  let curr = root;
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr); // 7
      curr = curr.left;
    }
    // console.log(stack); //
    curr = stack.pop();
    result.push(curr.value);
    curr = curr.right;
  }
  return result;
}
console.log(inOrderTraversal1(root1)); // 5 2 4 1 6 3 7

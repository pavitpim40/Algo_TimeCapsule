```js
var preorderTraversal = function (root) {
  if (!root) return [];
  // iterative solution
  const stack = [],
    result = [];
  let current = root;
  while (stack.length || current) {
    while (current) {
      stack.push(current);
      result.push(current.val);
      current = current.left;
    }
    current = stack.pop();
    current = current.right;
  }
  return result;

  // if(!root) return []
  // return [root.val,...preorderTraversal(root.left),...preorderTraversal(root.right)]
};
```

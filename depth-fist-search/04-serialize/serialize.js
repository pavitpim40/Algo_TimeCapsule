function serialize(root) {
  // WRITE YOUR BRILLIANT CODE HERE
  if (!root) return 'x';
  let result = '';
  if (root.val) result += root.val;
  result += ' ' + serialize(root.left);
  result += ' ' + serialize(root.right);
  return result;
}

function deserialize_recurse(nodeArr) {
  // let val = nodeArr.next().value
  // console.log(val)
  let val = nodeArr.shift();

  if (!val || val === 'x') return null;

  const tree = new Node(val);
  tree.left = deserialize_recurse(nodeArr);
  tree.right = deserialize_recurse(nodeArr);
  return tree;
}

function deserialize(s) {
  // AND HERE
  return deserialize_recurse(s.split(' '));
}

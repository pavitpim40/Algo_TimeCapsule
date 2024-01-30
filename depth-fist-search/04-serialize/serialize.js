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
  if (nodeArr.lenght == 0) return null;
  if (nodeArr[0] === 'x') return null;
  const tree = new Node(
    nodeArr[0],
    deserialize_recurse(nodeArr.slice(1)),
    deserialize_recurse(nodeArr.slice(2))
  );
  console.log(tree);
  return tree;
}

function deserialize(s) {
  // AND HERE
  return deserialize_recurse(s.split(' '));
}

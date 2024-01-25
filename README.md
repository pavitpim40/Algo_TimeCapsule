# Algo_TimeCapsule

# Tree

1.Definition

- Tree = Graph with no cycle
- exits path from root to any node
- N node , N-1 edge (node == vertice, edge == line)
- each node has one parent except root (root has no parent)

2. Terminology

- Leaf node : node with no child
- Internal node : not leaf node
- Ancestor : all node on path from root to node
- Descendant : all node on path from node to leaf
- Depth : number of edges from root to node

3. Binary Tree

- Defiinition : Tree ที่มี child ไม่เกิน 2 ตัว
- Type of Binary Tree

  - Full Binary Tree : ทุก node มี child 2 ตัว หรือไม่มี child เลย
  - Complete Binary Tree : ทุก level มี node เต็ม ยกเว้น level สุดท้าย ที่ node อาจจะไม่เต็ม
  - Perfect Binary Tree : ทุก level มี node เต็ม
  - Balanced Binary Tree : ทุก level มี node เต็ม และ ความสูงของ subtree ที่แต่ละ node ต้องไม่ต่างกันมากกว่า 1

4. Tree Traversal

- Inorder : left -> root -> right
- Preorder : root -> left -> right
- Postorder : left -> right -> root

inorder

```js
function inOrder(node) {
  if (node !== null) {
    inOrder(node.left);
    console.log(node.value);
    inOrder(node.right);
  }
}
```

```js
function preOrder(node) {
  if (node != null) {
    console.log(node.value);
    inOrder(node.left);
    inOrder(node.right);
  }
}
```

```js
function postOrder(node) {
  if (node != null) {
    inOrder(node.left);
    inOrder(node.right);
    console.log(node.value);
  }
}
```

# Depth First Search (DFS)

```js
function dfs(node, target) {
  if (!node) return null;
  if (node.value === target) return node;
  let left = dfs(node.left, target);
  if (left !== null) return left;
  let right = dfs(node.right, target);
  // ฝังขวาถ้าเจอก็ต้อง return node ที่เจอ
  // แต่ถ้าไม่เจอแปลว่า ไม่เจอทั้งซ้ายและขวา จึง return null
  return right;
}
```

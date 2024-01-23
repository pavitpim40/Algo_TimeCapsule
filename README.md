# Algo_TimeCapsule

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

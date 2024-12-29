class Vertex {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
const a = new Vertex(22);
const b = new Vertex(18);
const c = new Vertex(101);
const d = new Vertex(32);
const e = new Vertex(1);

a.left = b;
a.right = e;
b.left = c;
b.right = d;

function allPathsDfs(vertex, currentPrefix) {
  if (vertex === null) {
    return [];
  }
  const currentPath = currentPrefix.concat([vertex.value]);
  if (vertex.left === null && vertex.right === null) {
    return [currentPath];
  }
  return allPathsDfs(vertex.left, currentPath).concat(
    allPathsDfs(vertex.right, currentPath)
  );
}

function getAllPaths(vertex) {
  return allPathsDfs(vertex, []);
}

console.log(getAllPaths(a));

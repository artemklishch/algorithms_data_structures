/**
 *
 * @param val
 * @constructor
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 *
 * @param {ListNode} node
 * @returns {Array}
 */
function serialize(node) {
  const result = [];
  let currentNode = node;

  while (currentNode !== null) {
    result.push(currentNode.val);
    currentNode = currentNode.next;
  }

  return result;
}

/**
 *
 * @param {Array} data
 * @returns {ListNode}
 */
function createList(data) {
  const head = new ListNode(data[0]);
  let currentNode = head;

  for (let i = 1; i < data.length; i += 1) {
    currentNode.next = new ListNode(data[i]);
    currentNode = currentNode.next;
  }

  return head;
}

/**
 *
 * @param {number} val
 * @param {ListNode} head
 *
 * @returns {ListNode}
 */
function findNode(head, val) {
  let node = head;

  while (node.val !== val) {
    node = node.next;
  }

  return node;
}

// const arr1 = [4, 5, 1, 9];
const arr1 = [1, 2, 3, 4, 5, 6];
const list = createList(arr1);

/**
 * Definition for singly-linked list.
 *
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * @param {ListNode} node
 * @returns {void} Do not return anything, modify node in-place instead.
 */
function deleteNode(node) {
  if (node.next) {
    node.val = node.next.val;
    node.next = node.next.next;
  }
}

// const nodeToDelete = findNode(list, 5);
const nodeToDelete = findNode(list, 1); // [2,3,4,5,6]
deleteNode(nodeToDelete);

console.log(serialize(list));

module.exports = {
  ListNode,
  serialize,
  createList,
  findNode,
};

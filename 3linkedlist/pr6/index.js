/**
 * @param val
 * @constructor
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} node
 *
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
 * @param {Array} data
 *
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
 * Definition for singly-linked list.
 *
 * function ListNode(val) {
 *     this.val = val
 *     this.next = null
 * }
 *
 * @param {ListNode} head
 *
 * @returns {ListNode}
 */
function reverseList(head) {
  let prev = null;
  let current = head;

  while (current !== null) {
    const next = current.next;

    current.next = prev;
    prev = current;
    current = next;
  }

  return prev;
}

const arr = [1, 2, 3, 4, 5];
const list = createList(arr);
const res = reverseList(list);
console.log(serialize(res));

module.exports = {
  ListNode,
  serialize,
  createList,
};

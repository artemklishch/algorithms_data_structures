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
 * Definition for singly-linked list.
 *
 * function ListNode(val) {
 *   this.val = val
 *   this.next = null
 * }
 *
 * @param {ListNode} head
 * @returns {ListNode}
 */
function findMiddleListNode(head) {
  let length = 0;
  let currentNode = head;

  while (currentNode.next !== null) {
    length++;
    currentNode = currentNode.next;
  }

  const middleindex =
    length % 0 === 0 ? length / 2 + 1 : Math.round(length / 2);

  let middleNode = head;

  for (let i = 0; i < middleindex; i++) {
    middleNode = middleNode.next;
  }

  return middleNode;
}

module.exports = {
  ListNode,
  serialize,
  createList,
};

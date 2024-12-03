/**
 * @param val
 * @constructor
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 *
 * @param {Array} data
 * @param {number} pos
 *
 * @returns {ListNode}
 */
function createList(data, pos) {
  const head = new ListNode(data[0]);
  let currentNode = head;

  let linkedNode = pos === 0 ? head : null;

  for (let i = 1; i < data.length; i += 1) {
    if (i === pos) {
      linkedNode = currentNode;
    }

    currentNode.next = new ListNode(data[i]);
    currentNode = currentNode.next;
  }

  currentNode.next = linkedNode;

  return head;
}
/**
 * Definition for singly-linked list.
 *
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 *
 * @param {ListNode} head
 * @returns {boolean}
 */
function hasCycle(head) {
  if (head.next === null) {
    return false;
  }

  let currentNode = head;
  const arr = [];

  while (currentNode !== null) {
    const isLinkPresent = arr.some((l) => l.next === currentNode.next);

    if (isLinkPresent) {
      return true;
    }
    arr.push(currentNode);
    currentNode = currentNode.next;
  }

  return false;
}

module.exports = {
  ListNode,
  createList,
};

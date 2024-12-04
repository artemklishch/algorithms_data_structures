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
  if (data.length === 0) {
    return null;
  }

  const head = new ListNode(data[0]);
  let currentNode = head;

  for (let i = 1; i < data.length; i += 1) {
    currentNode.next = new ListNode(data[i]);
    currentNode = currentNode.next;
  }

  return head;
}

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
 * @param {ListNode} l1
 * @param {ListNode} l2
 *
 * @returns {ListNode}
 */
// function mergeTwoLists(l1, l2) {
//   if (!l1 && !l2) {
//     return null;
//   }
//   const allNodes = [];
//   let firstListFinished = false;
//   let currentNode = l1;
//   while (currentNode !== null || !firstListFinished) {
//     allNodes.push(currentNode);
//     if (!currentNode.next && !firstListFinished) {
//       currentNode = l2;
//       firstListFinished = true;
//     } else {
//       currentNode = currentNode.next;
//     }
//   }
//   const allNumbersSorted = allNodes.sort((a, b) => a.val - b.val);
//   const mergedList = allNumbersSorted[0];
//   for (let i = 0; i <= allNumbersSorted.length - 1; i++) {
//     allNumbersSorted[i].next = allNumbersSorted[i + 1] || null;
//   }
//   return mergedList;
// }
function mergeTwoLists(l1, l2) {
  // Створення "фіктивного" вузла для спрощення логіки злиття
  const dummy = new ListNode(-1);
  let current = dummy;

  // Поки обидва списки не порожні
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1; // Додати вузол з l1
      l1 = l1.next; // Перемістити вказівник у l1
    } else {
      current.next = l2; // Додати вузол з l2
      l2 = l2.next; // Перемістити вказівник у l2
    }
    current = current.next; // Перемістити вказівник у результатному списку
  }

  // Якщо один зі списків ще не завершився
  current.next = l1 !== null ? l1 : l2;

  // Повертаємо злитий список, пропускаючи "фіктивний" вузол
  return dummy.next;
}

const arr1 = [1, 2, 4];
const arr2 = [1, 3, 4];
// const arr1 = [];
// const arr2 = [];
const l1 = createList(arr1);
const l2 = createList(arr2);

const resList = mergeTwoLists(l1, l2);

console.log("resList", serialize(resList));

module.exports = {
  ListNode,
  serialize,
  createList,
};

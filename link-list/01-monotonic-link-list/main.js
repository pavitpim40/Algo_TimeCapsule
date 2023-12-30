/*
Q. Given a linked list, determine if it is monotonically increasing. Monotonically increasing means always increasing or remaining constant.

Examples:

Given a linked list: 1 -> 1 -> 2 -> 5 // returns True
Given a linked list: -1 -> -5 -> 3 -> -100, // returns False
[execution time limit] 4 seconds (js)

[input] linkedlist.integer head

head of the list

[output] boolean
*/

function isMonotonic(head) {
  while (head.next) {
    if (head.val >= head.next.val) {
      return false;
    }
    head = head.next;
  }
  return true;
}

// Test Case
let head = new ListNode(-1, new ListNode(-5, new ListNode(-3, new ListNode(-100))));
let head1 = new ListNode(
  1,
  new ListNode(
    1,
    new ListNode(
      1,
      new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(1, new ListNode(-1)))))
    )
  )
);
let head2 = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      3,
      new ListNode(5, new ListNode(100, new ListNode(9123, new ListNode(9313, new ListNode(9315)))))
    )
  )
);
console.log(isMonotonic(head)); // false
console.log(isMonotonic(head1)); // false
console.log(isMonotonic(head2)); // true

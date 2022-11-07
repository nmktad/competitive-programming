/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function deleteDuplicates(head: ListNode | null): ListNode | null {
  let firstItr = head;
  let secondItr = head;

  {
    /*
      [1,1,1,2,3]


    */
  }

  while (secondItr != null) {
    while (secondItr.next && secondItr.val == secondItr.next.val) {
      secondItr = secondItr?.next;
    }

    if (firstItr?.next !== null && typeof firstItr?.next !== "undefined") {
      if (firstItr?.val === firstItr?.next.val) {
        firstItr = firstItr?.next;
      }
    }

    if (firstItr?.next == secondItr) {
      firstItr = firstItr.next;
      secondItr = secondItr.next;
    } else {
      if (firstItr !== null) {
        firstItr.next = secondItr.next;
        secondItr = firstItr.next;
      }
    }
  }

  return head;
}

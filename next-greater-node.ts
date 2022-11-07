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

type ListNode = {
  val: number;
  next: ListNode;
};

function nextLargerNodes(head: ListNode | null): number[] {
  let cut = head;

  let size = 0;

  while (cut) {
    size++;
    cut = cut.next;
  }

  let result = new Array(size).fill(0);
  const stack: number[][] = [];
  cut = head;
  let i = 0;

  while (cut) {
    while (stack.length > 0 && stack[stack.length - 1][1] < cut.val) {
      let poped = stack.pop()!;
      result[poped[0]] = cut.val;
    }
    stack.push([i, cut.val]);
    cut = cut.next;
    i++;
  }

  return result;
}

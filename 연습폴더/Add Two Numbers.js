// 두개의 연결리스트를 받아 각 연결리스트가 표현하는 숫자를 더한다.
// 합을 역순으로 저장하는 새 연결리스트로 반환한다.
// 연결리스트는 비어있지 않고 각 연결리스트는 한자리 숫자를 포함한다.

// 해결법
// 각 연결리스트의 노드를 순회하며 해당 자릿수의 값을 더하고 반올림처리한다.
// 두 숫자의 합을 역순으로 저장하는 연결리스트를 반환한다.

function ListNode(val, next) {
  this.val = val === undifined ? 0 : val;
  this.next = next === undifined ? null : next;
}

let addTwoNumbers = function (l1, l2) {
  let head = new ListNode(0);
  let current = head;
  let carry = 0;

  while (l1 !== null || l2 !== null) {
    let x = l1 !== null ? l1.val : 0;
    let y = l2 !== null ? l2.val : 0;
    let sum = carry + x + y;
    carry = Math.floor(sum / 10); // 내림해서 정수 반환

    current.next = new ListNode(sum % 10);
    current = current.next;

    if (l1 !== null) {
      l1 = l1.next;
    }
    if (l2 !== null) {
      l2 = l2.next;
    }

    if (carry > 0) {
      current.next = new ListNode(carry);
    }

    return head.next;
  }
};

console.log(addTwoNumbers([0], [0]));

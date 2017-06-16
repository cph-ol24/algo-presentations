export const push = `
public void push(String item) {
    Node oldFirst = this.first;
    this.first = new Node(item);
    this.first.next = oldFirst;
}
`;

export const pop = `
public String pop() {
    Node oldFirst = this.first;
    this.first = this.first.next;
    return oldFirst.item;
}
`;

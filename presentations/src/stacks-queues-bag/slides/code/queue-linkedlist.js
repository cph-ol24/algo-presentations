export const enqueue = `
public void enqueue(String item) {
    Node newNode = new Node(item);
    if (this.last != null) this.last.next = newNode;
    this.last = newNode;
    
    // handle empty queues
}
`;

export const dequeue = `
public String dequeue() {
    Node oldFirst = this.first;
    this.first = this.first.next;
    // handle empty queues
    return oldFirst.item;
}
`;

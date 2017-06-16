export const resizer = `
private void resize(int capacity) {
    String[] copy = new String[capacity];
    for(int = 0; i < this.n; i++) {
        copy[i] = this.s[i];
    }
    this.s = copy;
}
`;

export const push = `
public void push(String item) {
    // ...
    if (this.n == this.s.length) resize(2 * this.s.length);
    // ...
}
`;

export const pop = `
public String pop() {
    // ...
    if (this.n > 0 && this.n == this.s.length / 4) resize(this.s.length / 2);
    // ...
}
`;

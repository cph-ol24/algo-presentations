export const construct = `
public MyConstructor(int capacity) {
    this.n = 0;
    this.s = new String[capacity];
}
`;

export const push = `
public void push(String item) {
    this.s[++this.n] = item;
}
`;

export const pop = `
public String pop() {
    return this.s[--this.n];
}
`;

export const popNullClear = `
    this.s[this.n] = null;
`;

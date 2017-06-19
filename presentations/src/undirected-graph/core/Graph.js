class Graph {
  _v = 0;
  _adj = [];

  constructor(numberOfVertices: number) {
    this._v = numberOfVertices;

    for (let i = 0; i < this._v; i++) {
      this._adj[i] = [];
    }
  }

  addEdge(a: number, b: number) {
    this._adj[a].push(b);
    this._adj[b].push(a);
  }

  adj(vertex: number) {
    return this._adj[vertex];
  }
}

export default Graph;
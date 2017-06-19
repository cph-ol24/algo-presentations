class Graph {
  _v = 0;
  _adj = [];

  constructor(numberOfVertices: number) {
    this._v = numberOfVertices;

    for (let i = 0; i < this._v; i++) {
      this._adj[i] = [];
    }
  }

  get size() {
    return this._v;
  }

  addEdge(edge) {
    const v = edge.from;
    this._adj[v].push(edge);
  }

  adj(vertex: number) {
    return this._adj[vertex];
  }
}

export default Graph;

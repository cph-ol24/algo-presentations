class Path {
  _graph = null;
  _marked = [];
  _edgeTo = [];

  constructor(graph) {
    this._graph = graph;
  }

  hasPathTo(v: number) {
    return this._marked[v] || false;
  }

  pathTo(s: number, v: number) {
    if (!this.hasPathTo(v)) return null;

    let path = [];
    for (let x = v; x != s; x = this._edgeTo[x]) {
      path.push(x);
    }

    path.push(s);
    return path;
  }
}

export default Path;

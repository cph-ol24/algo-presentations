class Path {
  _graph = null;
  _distTo = [];
  _edgeTo = [];

  constructor(graph) {
    this._graph = graph;
  }

  distTo(v) {
    return this._distTo[v];
  }

  pathTo(v) {
    const path = [v];

    for (let e = this._edgeTo[v]; e != null; e = this._edgeTo[e.from]) {
      path.push(e.from);
    }

    return path;
  }
}

export default Path;

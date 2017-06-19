import Path from "./Path";

class DepthFirstSearchPath extends Path {
  execute(v: number) {
    this._marked[v] = true;
    
    this._graph.adj(v).forEach(w => {
      if (!this._marked[w]) {
        this.execute(w);
        this._edgeTo[w] = v;
      }
    });
  }
}

export default DepthFirstSearchPath;

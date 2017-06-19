import Path from "./Path";

class BreathFirstSearchPath extends Path {
  execute(v: number) {
    const queue = [v];
    this.marked[v] = true;

    while (queue.length > 0) {
      const v = queue.shift();

      this._graph.adj(v).forEach(w => {
        if (!this._marked[w]) {
          queue.push(v);
          this._edgeTo[w] = v;
        }
      });
    }
  }
}

export default DepthFirstSearchPath;

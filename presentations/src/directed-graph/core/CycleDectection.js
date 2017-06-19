import Path from "./Path";

class CycleDectection extends Path {
  _reversePost = [];
  _onStack = [];
  _hasCycle = false;

  execute(v: number) {
    this._marked[v] = true;
    this._onStack[v] = true;

    this._graph.adj(v).forEach(w => {
      if (!this._marked[w]) {
        this.execute(w);
        this._edgeTo[w] = v;
      } else if (this._onStack[w]) {
        this._hasCycle = true;
        return;
      }
    });

    this._reversePost.push(v);
    this._onStack[v] = false;
  }

  containsCycle(v: number) {
    this.execute(v);

    return this._hasCycle;
  }
}

export default CycleDectection;

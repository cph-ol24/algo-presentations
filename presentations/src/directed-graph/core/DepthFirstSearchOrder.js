import Path from "./Path";

class DepthFirstSearchOrder extends Path {
  _reversePost = [];

  execute(v: number) {
    this._marked[v] = true;
    
    this._graph.adj(v).forEach(w => {
      if (!this._marked[w]) {
        this.execute(w);
        this._edgeTo[w] = v;
      }
    });

    this._reversePost.push(v);
  }

  reversePost() {
    return this._reversePost;
  }
}

export default DepthFirstSearchOrder;

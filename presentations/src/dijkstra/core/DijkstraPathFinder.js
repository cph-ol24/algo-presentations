import FastPriorityQueue from "fastpriorityqueue";

import Path from "./Path";

class QueueItem {}

class DijkstraPathFinder extends Path {
  execute(s) {
    const queue = new FastPriorityQueue((a, b) => a.value < b.value);

    for (let i = 0; i < this._graph.size; i++) {
      this._distTo[i] = Number.MAX_SAFE_INTEGER;
    }

    this._distTo[s] = 0.0;

    queue.add({ key: s, value: 0.0 });

    const checked = [];
    while (!queue.isEmpty()) {
      let item = queue.poll();
      let v = item.key;

      if (typeof checked[v] === "undefined") {
        this._graph.adj(v).forEach(edge => {
          this._relax(queue, edge);
        });

        checked[v] = true;
      }
    }
  }

  _relax(queue, edge) {
    let v = edge.from;
    let w = edge.to;

    if (this._distTo[w] > this._distTo[v] + edge.weight) {
      this._distTo[w] = this._distTo[v] + edge.weight;
      this._edgeTo[w] = edge;
      
      queue.add({ key: w, value: this._distTo[w] });
    }
  }
}

export default DijkstraPathFinder;

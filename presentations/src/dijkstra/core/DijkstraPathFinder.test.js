// @flow
import Graph from "./Graph";
import DijkstraPathFinder from "./DijkstraPathFinder";
import DirectedEdge from "./DirectedEdge";

const createGraph = () => {
  const graph = new Graph(13);

  graph.addEdge(new DirectedEdge(0, 1, 5.0));  
  graph.addEdge(new DirectedEdge(0, 2, 8.0));
  graph.addEdge(new DirectedEdge(0, 3, 9.0));
  graph.addEdge(new DirectedEdge(1, 2, 2.0));

  return graph;
};

describe("DijkstraPathFinder", () => {
  it("should be able to find path", () => {
    const graph = createGraph();

    const searchResult = new DijkstraPathFinder(graph);
    searchResult.execute(0);

    expect(searchResult.pathTo(2)).toEqual([2, 1, 0]);
  });
});

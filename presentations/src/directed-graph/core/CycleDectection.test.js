// @flow
import Graph from "./Graph";
import CycleDectection from "./CycleDectection";

const createGraph = () => {
  const graph = new Graph(13);

  graph.addEdge(0, 1);
  graph.addEdge(0, 5);
  graph.addEdge(5, 4);
  graph.addEdge(4, 3);
  graph.addEdge(3, 5);
  graph.addEdge(3, 2);
  graph.addEdge(2, 3);
  graph.addEdge(2, 0);
  graph.addEdge(4, 2);
  graph.addEdge(7, 6);
  graph.addEdge(6, 8);
  graph.addEdge(8, 6);
  graph.addEdge(6, 4);
  graph.addEdge(6, 9);
  graph.addEdge(7, 9);
  graph.addEdge(9, 10);
  graph.addEdge(10, 12);
  graph.addEdge(12, 9);
  graph.addEdge(9, 11);
  graph.addEdge(11, 12);
  graph.addEdge(11, 4);

  return graph;
};

describe("Depth-First-Order DIRECTED", () => {
  it("should be able to find if contains a cycle", () => {
    const graph = createGraph();

    const searchResult = new CycleDectection(graph);

    expect(searchResult.containsCycle(0)).toBe(true);
  });

  it("should be able to find if contains no cycle", () => {
    const graph = new Graph(3);
    graph.addEdge(0, 1);
    graph.addEdge(1, 2);
    graph.addEdge(0, 2);

    const searchResult = new CycleDectection(graph);

    expect(searchResult.containsCycle(0)).toBe(false);
  });
});

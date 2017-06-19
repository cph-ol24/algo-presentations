// @flow
import Graph from "./Graph";
import DepthFirstSearchPath from "./DepthFirstSearchPath";

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

describe("Depth-First-Search DIRECTED", () => {
  it("should be able to find path", () => {
    const graph = createGraph();

    const searchResult = new DepthFirstSearchPath(graph);
    searchResult.execute(0);

    expect(searchResult.hasPathTo(3)).toBe(true);
    expect(searchResult.hasPathTo(9)).toBe(false);
  });

  it("should be able to return paths for #CC1", () => {
    const graph = createGraph();

    const searchResult = new DepthFirstSearchPath(graph);
    searchResult.execute(0);

    expect(searchResult.pathTo(0, 3)).toEqual([3, 4, 5, 0]);
  });

  it("should be able to return paths for #CC3", () => {
    const graph = createGraph();

    const searchResult = new DepthFirstSearchPath(graph);
    searchResult.execute(9);

    expect(searchResult.pathTo(9, 10)).toEqual([10, 9]);
  });
});

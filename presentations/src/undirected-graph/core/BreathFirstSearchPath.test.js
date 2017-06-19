// @flow
import Graph from "./Graph";
import DepthFirstSearchPath from "./DepthFirstSearchPath";

const createGraph = () => {
  const graph = new Graph(13);

  //#CC 1
  graph.addEdge(0, 1);
  graph.addEdge(0, 2);
  graph.addEdge(0, 6);
  graph.addEdge(0, 5);
  graph.addEdge(5, 3);
  graph.addEdge(3, 4);
  graph.addEdge(4, 6);

  //#CC 2
  graph.addEdge(7, 8);

  //#CC 3
  graph.addEdge(9, 10);
  graph.addEdge(9, 11);
  graph.addEdge(11, 12);
  graph.addEdge(9, 12);

  return graph;
};

describe("BreathFirstSearchPath", () => {
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

    expect(searchResult.pathTo(0, 3)).toEqual([3, 4, 6, 0]);
  });

  it("should be able to return paths for #CC3", () => {
    const graph = createGraph();

    const searchResult = new DepthFirstSearchPath(graph);
    searchResult.execute(9);

    expect(searchResult.pathTo(9, 10)).toEqual([10, 9]);
  });
});

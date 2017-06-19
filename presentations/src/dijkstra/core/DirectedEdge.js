class DirectedEdge {
  constructor(v, w, weight) {
    this._v = v;
    this._w = w;
    this._weight = weight;
  }

  get from() {
    return this._v;
  }

  get to() {
    return this._w;
  }

  get weight() {
    return this._weight;
  }
}

export default DirectedEdge;

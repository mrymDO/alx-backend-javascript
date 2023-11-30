export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (this.constructor !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    if (typeof this._sqft !== 'number') {
      throw new TypeError('sqft must be a number.');
    }
    return this._sqft;
  }
}

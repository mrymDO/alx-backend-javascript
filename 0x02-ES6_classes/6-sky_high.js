import Building from './5-building';

export default class skyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    this._floors = floors;
  }

  get floors() {
    if (typeof this._floors !== 'number') {
      throw TypeError('floors must be number.');
    }
    return this._floors;
  }

  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors`;
  }
}

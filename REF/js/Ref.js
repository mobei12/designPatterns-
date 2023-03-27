import { update } from "./render.js";
export default class Ref {
	constructor(defaultValue) {
		this.deps = new Set();
		this._defaultValue = defaultValue;
		this._value = defaultValue;
	}
	get value() {
		return this._value;
	}
	set value(nValue) {
		this._value = nValue;
		update(this);
	}
	$reset() {
		this.value = this._defaultValue;
	}
}

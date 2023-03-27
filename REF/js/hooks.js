import Ref from './Ref.js';
const reg = /\{\{(.+?)}}/;
export function ref(defaultValue) {
	return new Ref(defaultValue);
}
export function createRefs(refs, nodes) {
	nodes.forEach(element => {
		if (reg.test(element.textContent)) {
			const refKey = element.textContent.match(reg)[1].trim();
			refs[refKey].deps.add(element);
		}
	});
	return refs;
}

export function bindEvent(allNodes, methods) {
	allNodes.forEach(element => {
		const handlerName = element.getAttribute('@click');
		if (handlerName) {
			element.addEventListener('click', methods[handlerName].bind(this),false);
		}
	});
}

import { ref, createRefs } from './hooks.js';
import { render } from './render.js';
import { bindEvent } from './event.js';
export function createApp(el, { refs, methods }) {
	//获取容器
	const $el = document.querySelector(el);
	//拿到容器里的节点
	const allNodes = $el.querySelectorAll('*');
	//创建refs对象
	const refSet = createRefs(refs, allNodes);
	//初始化
	render(refSet);
	//绑定事件
    bindEvent.apply(refSet,[allNodes,methods])
}
export { ref };

import {createApp,ref} from "./main.js"
createApp('#app', {
	refs: {
		title: ref('默认标题'),
		content: ref('默认内容')
	},
	methods: {
		setTitle() {
            this.title.value = "新标题"
        },
		setContent() {
            this.content.value = "新内容"
        },
        reset() {
            this.title.$reset()
            this.content.$reset()
        }
	}
});

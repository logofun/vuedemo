<template>
	<div class="quill-editor">
		<slot name="toolbar"></slot>
		<div ref="editor"></div>
	</div>
</template>

<script>
// require sources

import Quill from "quill";

const defaultOptions = {
	theme: "snow",
	boundary: document.body,
	modules: {
		toolbar: [
			["bold", "italic", "underline", "strike"],
			["blockquote", "code-block"],
			[{ header: [1, 2, 3, 4, 5, 6, false] }],
			[{ list: "ordered" }, { list: "bullet" }],
			[{ script: "sub" }, { script: "super" }],
			[{ indent: "-1" }, { indent: "+1" }],
			[{ direction: "rtl" }],
			[{ color: [] }, { background: [] }],
			[{ font: [] }],
			[{ align: [] }],
			["clean"],
			["link", "image", "video"],
		],
	},
	placeholder: "开始Quill吧 ...",
	readOnly: false,
};


// export
export default {
	name: "quill-editor",
	data() {
		return {
			_options: {},
			_content: "",
			defaultOptions,
		};
	},
	props: {
		content: String,
		value: String,
		disabled: {
			type: Boolean,
			default: false,
		},
		options: {
			type: Object,
			required: false,
			default: () => ({}),
		},
		globalOptions: {
			type: Object,
			required: false,
			default: () => ({}),
		},
	},
	mounted() {
		this.initialize();
	},
	beforeDestroy() {
		this.quill = null;
		delete this.quill;
	},
	methods: {
		// Init Quill instance
		initialize() {
			if (this.$el) {
				// Options
				this._options = Object.assign(
					{},
					this.defaultOptions,
					this.globalOptions,
					this.options
				);

				// Instance
				this.quill = new Quill(this.$refs.editor, this._options);

				this.quill.enable(false);

				// Set editor content
				if (this.value || this.content) {
					this.quill.setContents(this.quill.clipboard.convert(this.value || this.content));
				}

				// Disabled editor
				if (!this.disabled) {
					this.quill.enable(true);
				}

				// Mark model as touched if editor lost focus
				this.quill.on("selection-change", (range) => {
					if (!range) {
						this.$emit("blur", this.quill);
					} else {
						this.$emit("focus", this.quill);
					}
				});

				// Update model if text changes
				this.quill.on("text-change", (delta, oldDelta, source) => {
					let html = this.$refs.editor.children[0].innerHTML;
					const quill = this.quill;
					const text = this.quill.getText();
					if (html === "<p><br></p>") html = "";
					this._content = html;
					this.$emit("input", this._content);
					this.$emit("change", { html, text, quill });
				});

				// Emit ready event
				this.$emit("ready", this.quill);
			}
		},
	},
	watch: {
		// Watch content change
		content(newVal, oldVal) {
			if (this.quill) {
				if (newVal && newVal !== this._content) {
					this._content = newVal;
					this.quill.setContents(this.quill.clipboard.convert(newVal));
				} else if (!newVal) {
					this.quill.setText("");
				}
			}
		},
		// Watch content change !!value ==conten??
		value(newVal, oldVal) {
			if (this.quill) {
				if (newVal && newVal !== this._content) {
					this._content = newVal;
					this.quill.setContents(this.quill.clipboard.convert(newVal));
				} else if (!newVal) {
					this.quill.setText("");
				}
			}
		},
		// Watch disabled change
		disabled(newVal, oldVal) {
			if (this.quill) {
				this.quill.enable(!newVal);
			}
		},
	},
};
</script>

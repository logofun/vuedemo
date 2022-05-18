<template>
  <div class="editor">
    <div class="menubar">
      <span v-for="actionName in activeButtons" :key="actionName">
        <button
          v-if="actionName === 'bold'"
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('bold') }"
          @click="editor.chain().focus().toggleBold().run()"
        >
          <bold-outlined />
        </button>
        <button
          v-if="actionName === 'italic'"
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('italic') }"
          @click="editor.chain().focus().toggleItalic().run()"
        >
          <italic-outlined />
        </button>

        <button
          v-if="actionName === 'strike'"
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('strike') }"
          @click="editor.chain().focus().toggleStrike().run()"
        >
          <strikethrough-outlined />
        </button>

        <button
          v-if="actionName === 'underline'"
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('underline') }"
          @click="editor.chain().focus().toggleUnderline().run()"
        >
          <underline-outlined />
        </button>

        <button
          v-if="actionName === 'code'"
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('code') }"
          @click="editor.chain().focus().toggleCode().run()"
        >
          <code-outlined />
        </button>

        <button
          v-if="actionName === 'h1'"
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
          @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
        >
          H1
        </button>

        <button
          v-if="actionName === 'h2'"
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
          @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
        >
          H2
        </button>

        <button
          v-if="actionName === 'h3'"
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
          @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
        >
          H3
        </button>

        <button
          v-if="actionName === 'bulletList'"
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('bulletList') }"
          @click="editor.chain().focus().toggleBulletList().run()"
        >
          <unordered-list-outlined />
        </button>

        <button
          v-if="actionName === 'orderedList'"
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('orderedList') }"
          @click="editor.chain().focus().toggleOrderedList().run()"
        >
          <ordered-list-outlined />
        </button>

        <button
          v-if="actionName === 'blockquote'"
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('blockquote') }"
          @click="editor.chain().focus().toggleBlockquote().run()"
        >
          <dash-outlined />
        </button>

        <button
          v-if="actionName === 'codeBlock'"
          class="menubar__button"
          :class="{ 'is-active': editor.isActive('codeBlock') }"
          @click="editor.chain().focus().toggleCodeBlock().run()"
        >
          
          <BlockOutlined />
        </button>

        <button
          v-if="actionName === 'horizontalRule'"
          class="menubar__button"
          @click="editor.chain().focus().setHorizontalRule().run()"
        >
          <line-outlined />
        </button>

        <button
          v-if="actionName === 'undo'"
          class="menubar__button"
          @click="editor.chain().focus().undo().run()"
        >
          <undo-outlined />
        </button>

        <button
          v-if="actionName === 'redo'"
          class="menubar__button"
          @click="editor.chain().focus().redo().run()"
        >
          <redo-outlined />
        </button>
      </span>
    </div>

    <editor-content class="editor__content" :editor="editor" />
  </div>
</template>

<script>
// import Icon from './Icon.vue';
import { Editor, EditorContent } from "@tiptap/vue-3";
import StarterKit from "@tiptap/starter-kit";
// import Underline from '@tiptap/extension-underline';
import {
  BoldOutlined,
  ItalicOutlined,
  StrikethroughOutlined,
  UnderlineOutlined,
  CodeOutlined,
 UnorderedListOutlined,
  OrderedListOutlined,
  DashOutlined,
  CodeSandboxOutlined,BlockOutlined,
  LineOutlined,
  UndoOutlined,
  RedoOutlined,
} from "@ant-design/icons-vue";

export default {
  name: "Editor",
  components: {
    EditorContent,
  BoldOutlined,
  ItalicOutlined,
  StrikethroughOutlined,
 UnderlineOutlined,
  CodeOutlined,
UnorderedListOutlined,
  OrderedListOutlined,
  DashOutlined,
  CodeSandboxOutlined,BlockOutlined,
  LineOutlined,
  UndoOutlined,
  RedoOutlined,
  },
  props: {
    initialContent: {
      type: String,
      required: true,
      default: "<em>editable text</em>",
    },
    activeButtons: {
      type: Array,
      validator: function (list) {
        for (let el of list) {
          // The value must match one of these strings
          if (
            [
              "bold",
              "italic",
              "strike",
              "underline",
              "code",
              "h1",
              "h2",
              "h3",
              "bulletList",
              "orderedList",
              "blockquote",
              "codeBlock",
              "horizontalRule",
              "undo",
              "redo",
            ].indexOf(el) === -1
          ) {
            return -1;
          }
        }
        return 1;
      },
      default: () => ["bold", "italic"],
    },
  },
  emits: ["update"],
  data() {
    return {
      html: "",
      json: "",
      editor: null,
    };
  },
  created() {
    this.editor = new Editor({
      content: this.initialContent,
      extensions: [StarterKit],
      // extensions: [StarterKit, Underline],
    });

    this.html = this.editor.getHTML();
    this.json = this.editor.getJSON();

    this.editor.on("update", () => {
      this.html = this.editor.getHTML();
      this.json = this.editor.getJSON();
      this.$emit("update", this.html);
    });
  },
  beforeUnmount() {
    this.editor.destroy();
  },
};
</script>



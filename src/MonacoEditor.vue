<script>
import loader from "@monaco-editor/loader";

export default {
  props: {
    // for custom v-model
    value: {
      type: undefined,
      required: true,
    },
  },
  data() {
    return {
      editor: null,
    }
  },
  methods: {
    handleChange() {
      this.$emit('input', this.editor.getModel().getValue());
    },
  },
  async mounted() {
    loader.init().then((monaco) => {
      const editorOptions = {
        language: "javascript",
      };

      this.editor = monaco.editor.create(document.getElementById("editor"),   editorOptions);
      this.editor.getModel().onDidChangeContent(this.handleChange);
    });
  },
};
</script>

<template>
  <div id="editor" style="width: 500px; height: 500px"></div>
</template>

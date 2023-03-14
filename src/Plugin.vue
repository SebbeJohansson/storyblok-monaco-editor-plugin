<template>
  <div>
    <MonacoEditor v-model="model.content" />
  </div>
</template>

<script>
import MonacoEditor from './MonacoEditor.vue';

export default {
  components: {
    MonacoEditor,
  },
  mixins: [window.Storyblok.plugin],
  methods: {
    initWith() {
      return {
        plugin: 'monaco-editor', // Replace with the name of your plugin
        example: 'Hello World!',
        content: {},
      };
    },
  },
  watch: {
    'model': {
      handler: function (value) {
        this.$emit('changed-model', value);
      },
      deep: true
    }
  }
};
</script>
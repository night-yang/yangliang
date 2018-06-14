<template><div>
  <div id="note">
    <div v-html="compiledMarkdown"></div>
  </div>
  <input type="text" v-model="message"></div>
</template>
<script>
import marked from "marked";
var rendererMD = new marked.Renderer();
marked.setOptions({
  renderer: rendererMD,
  gfm: true,
  tables: true,
  breaks: false,
  edantic: false,
  sanitize: false,
  smartLists: true,
  smartypants: false
});
export default {
  name: "note",
  data: () => ({
    message: ""
  }),
  computed: {
    compiledMarkdown: function() {
      return marked(this.message, { sanitize: true });
    }
  }
};
</script>
<template>
  <div id="note">
<vue-markdown>The time of **NOW** is :</vue-markdown>
    <vue-markdown :source="source"></vue-markdown>
    <vue-markdown :anchor-attributes="anchorAttrs">[A link to a website](https://google.com)</vue-markdown>
<vue-markdown>**Inline Math**: $\sqrt{3x-1}+(1+x)^2$</vue-markdown>
    <vue-markdown>$$\begin{array}{c}

      \nabla \times \vec{\mathbf{B}} -\, \frac1c\, \frac{\partial\vec{\mathbf{E}}}{\partial t} &
      = \frac{4\pi}{c}\vec{\mathbf{j}}    \nabla \cdot \vec{\mathbf{E}} & = 4 \pi \rho \\

      \nabla \times \vec{\mathbf{E}}\, +\, \frac1c\, \frac{\partial\vec{\mathbf{B}}}{\partial t} & = \vec{\mathbf{0}} \\

      \nabla \cdot \vec{\mathbf{B}} & = 0

      \end{array}$$
    </vue-markdown>
  </div>
</template>

<script>

import VueMarkdown from 'vue-markdown'
export default {
  name: 'note',
  components: {
    VueMarkdown
  },
  data () {
    return {
      source: new Date().toLocaleTimeString(),
      anchorAttrs: {
        target: '_blank',
        rel: 'noopener noreferrer nofollow'
      }
    }
  },
  mounted () {
    setInterval(() => {
      this.source = new Date().toLocaleTimeString();
    }, 1000);
  }
}
</script>
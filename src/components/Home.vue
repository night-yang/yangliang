<template>
  <div class="wrap">
    <Head />
    <Section />
    <Footer />
  </div>
</template>

<script>

import Head from './Head'
import Section from './Section'
import Footer from './Footer'
export default {
  name: 'Home',
  components: {
    Head,
    Section,
    Footer
  }
}
</script>

<style scoped>

</style>
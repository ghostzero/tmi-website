<template>
  <div id="global-layout">
    <component :is="layout"/>
    <script>
      kofiWidgetOverlay.draw('ene', {
        'type': 'floating-chat',
        'floating-chat.donateButton.text': 'Support me',
        'floating-chat.donateButton.background-color': '#ff38b8',
        'floating-chat.donateButton.text-color': '#fff'
      });
    </script>
  </div>
</template>

<script>
export default {
  computed: {
    layout() {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // You can also check whether layout exists first as the default global layout does.
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  }
}
</script>

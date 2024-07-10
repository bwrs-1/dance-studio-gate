<template>
  <v-app dark>
    <cursor-fx
      ref="cursor"
      :shape="shape"
      :color="color"
      :color-hover="colorHover"
      :outside-size="outsideSizePx"
      :inside-size="insideSizePx"
      :hide-outside="outsideHide"
      :hide-inside="insideHide"
      :force-custom-slot="forceCustomSlot"
      :config="config"
      allow-on-mobile
    />
    <v-main>
      <siteHeader />
      <nuxt />
      <footerTop />
      <siteFooter />
    </v-main>
  </v-app>
</template>

<script>
import siteHeader from '~/components/siteHeader.vue'
import footerTop from '~/components/footerTop.vue'
import siteFooter from '~/components/siteFooter.vue'
export default {
  components: {
    siteHeader,
    footerTop,
    siteFooter,
  },
  data: () => ({
    shape: 'default',
    color: '#919191',
    colorHover: '262626',
    outsideSize: 84,
    insideSize: 6,
    outsideHide: false,
    insideHide: false,
    forceCustomSlot: false,
    config: {
      mixBlendMode: null,
      lerps: {
        dot: 1,
        circle: 0.38,
        custom: 0.23,
      },
      scale: {
        ratio: 0.18,
        min: 0.5,
        max: 1,
      },
      opacity: 0.1,
    },
  }),
  head() {
    return {
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-0DYDMZEYDZ',
        },
      ],
    }
  },
}
</script>

<style></style>

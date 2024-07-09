<template>
  <v-footer
    :class="
      $vuetify.theme.dark
        ? 'blue-grey darken-4 grey--text text--lighten-1'
        : 'grey lighten-3 grey--text text--darken-4'
    "
    class="site-footer"
  >
    <v-container>
      <v-divider class="mb-5"></v-divider>
      <v-row>
        <v-col class="text--secondary text-center">
          {{ new Date().getFullYear() }} © DANCE STUDIO GATE
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data() {
    return {
      menu: [
        { text: 'Support', link: '#' },
        { text: 'Contact Us', link: '#' },
        { text: 'Disclaimer', link: '#' },
        { text: 'Covid-19 Operation', link: '#' },
      ],
    }
  },
}
</script>

<style>
.site-footer a {
  text-decoration: none;
}
</style>

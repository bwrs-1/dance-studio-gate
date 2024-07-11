<template>
  <section :class="this.$vuetify.theme.dark ? '' : 'grey lighten-4'">
    <v-row no-gutters>
      <v-col cols="12">
        <SectionsHeroAlt :hero-alt="heroAlt" />
      </v-col>
    </v-row>

    <SectionsTeam :our-team="instructor" />
  </section>
</template>

<script>
export default {
  data() {
    return {
      heroAlt: [
        {
          src: 'pexels-andrea-piacquadio-3884440.jpg',
          heading: ' instructor ',
        },
      ],
      posts: [
        {
          id: '',
          title: 'Hello World',
          postImage: '',
          publishedOn: '',
          lastUpdated: '',
          author: '',
          tags: '',
          category: '',
          excerpt: '',
          content: '',
        },
      ],
      page: 2,
      tags: [
        'Work',
        'Home Improvement',
        'Vacation',
        'Food',
        'Drawers',
        'Shopping',
        'Art',
        'Tech',
        'Creative Writing',
      ],
      items: [
        { text: 'Technology' },
        { text: 'Health' },
        { text: 'News' },
        { text: 'Recent Discovery' },
        { text: 'Lifestyle and Fitness' },
        { text: 'Fashion' },
        { text: 'Music' },
      ],
      comments: [
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/1.jpg',
          title: 'Ali Connors',
          subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/2.jpg',
          title: 'Alex Scott',
          subtitle: `Wish I could come, but I'm out of town this weekend.`,
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/3.jpg',
          title: 'Sandra Adams',
          subtitle: 'Do you have Paris recommendations? Have you ever been?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/4.jpg',
          title: 'Trevor Hansen',
          subtitle:
            'Have any ideas about what we should get Heidi for her birthday?',
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn.vuetifyjs.com/images/lists/5.jpg',
          title: 'Britta Holt',
          subtitle:
            'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        },
      ],
      instructor: [
        {
          name: 'VOLTAGE',
          // position: 'CEO',
          // phone: '+1 (987) 1625346',
          // email: 'john@example.com',
          photo: 'person-1.jpg',
        },
        {
          name: 'THE BABEL',
          // position: 'instructor',
          // phone: '+1 (987) 5894684',
          // email: 'fiona@example.com',
          photo: 'person-2.jpg',
        },
        {
          name: 'SHOWY ',
          // position: 'instructor',
          // phone: '+1 (987) 6982456',
          // email: 'justin@example.com',
          photo: 'person-3.jpg',
        },
        {
          name: 'THE BABEL',
          // position: 'instructor',
          // phone: '+1 (987) 5894684',
          // email: 'fiona@example.com',
          photo: 'person-2.jpg',
        },
        {
          name: 'SHOWY ',
          // position: 'instructor',
          // phone: '+1 (987) 6982456',
          // email: 'justin@example.com',
          photo: 'person-3.jpg',
        },
        {
          name: 'THE BABEL',
          // position: 'instructor',
          // phone: '+1 (987) 5894684',
          // email: 'fiona@example.com',
          photo: 'person-2.jpg',
        },
        {
          name: 'SHOWY ',
          // position: 'instructor',
          // phone: '+1 (987) 6982456',
          // email: 'justin@example.com',
          photo: 'person-3.jpg',
        },
        {
          name: 'THE BABEL',
          // position: 'instructor',
          // phone: '+1 (987) 5894684',
          // email: 'fiona@example.com',
          photo: 'person-2.jpg',
        },
        {
          name: 'SHOWY ',
          // position: 'instructor',
          // phone: '+1 (987) 6982456',
          // email: 'justin@example.com',
          photo: 'person-3.jpg',
        },
        {
          name: 'THE BABEL',
          // position: 'instructor',
          // phone: '+1 (987) 5894684',
          // email: 'fiona@example.com',
          photo: 'person-2.jpg',
        },
        {
          name: 'SHOWY ',
          // position: 'instructor',
          // phone: '+1 (987) 6982456',
          // email: 'justin@example.com',
          photo: 'person-3.jpg',
        },
        {
          name: 'THE BABEL',
          // position: 'instructor',
          // phone: '+1 (987) 5894684',
          // email: 'fiona@example.com',
          photo: 'person-2.jpg',
        },
      ],
    }
  },
  head() {
    return {
      title: 'Blog',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content:
            'Infographic hypotheses influencer user experience Long madel ture gen-z paradigm shift client partner network product seilans solve management influencer analytics leverage virality. incubator seed round massmarket. buyer agile development growth hacking business-to-consumer ecosystem',
        },
      ],
    }
  },
}
</script>

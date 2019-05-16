<template>
    <v-toolbar app fixed clipped-left color="purple">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title >JodiDaar</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
                <v-menu offset-y>
                    <template v-slot:activator="{ on }">
                        <v-btn icon v-on="on">
                            <v-avatar size="40" color="grey lighten-4">
                                <img src="https://randomuser.me/api/portraits/men/85.jpg">
                            </v-avatar>
                        </v-btn>
                    </template>
                    <v-list>
                        <v-list-tile v-for="(item, index) in header_menu" :key="index" >
                            <v-list-tile-action>
                                <v-icon>{{item.icon}}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-title :to="item.link">{{ item.title }}</v-list-tile-title>
                        </v-list-tile>
                    </v-list>
                </v-menu>
            </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    name: "header",
    data: () => ({
      drawer: null,
      header_menu: [
				{
                    title: 'Subscription',
                    link: '/subscription',
                    icon: 'subscriptions'
				},
				{
                    title: 'Reset Password',
                    link: '/reset-password'
				},
				{
                    title: 'Logout',
                    link: '/logout',
                    icon: 'logout'
				}
      ],
      main_menus: [
				{
                    link: '/dashboard',
                    title: 'Dashboard',
                    icon: 'dashboard'
				},
				{
                    title: 'Photo Gallary',
                    link: '/gallary',
                    icon: 'album'
				},
				{
                    title: 'Search',
                    link: '/search',
                    icon: 'search'
				},
				{
                    title: 'Success Stories',
                    link: '/success-stories',
                    icon: 'search'
        },
        {
                    title: 'About Us',
                    link: '/about-us',
                    icon: ''
				},
				{
                    title: 'Contact Us',
                    link: '/contact-us',
                    icon: 'phone'
				},
      ]
    }),
}
</script>

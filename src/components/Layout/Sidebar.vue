<template>
<div> 
    <v-navigation-drawer
      v-model="drawer"
      clipped
      fixed
      app
      class="sidebar"
      width="250"
        >
      <v-list dense >
        <v-list-tile v-for="(menu, index) in main_menus" :key="index"> 
          <v-list-tile-action>
            <v-icon color="white darken-4">{{menu.icon}}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title >
              <router-link :to="menu.link" 
              >{{menu.title}}</router-link>
              </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>  
    <v-toolbar app fixed clipped-left color="purple">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title >JodiDaar</v-toolbar-title>
      <v-spacer></v-spacer>
      

<v-toolbar-items>
   <v-menu
      offset-y
      content-class="dropdown-menu"
      transition="slide-y-transition">
      <v-btn
         slot="activator"
         flat
         color="white"
         >
         <v-icon left>notification_important</v-icon>
      </v-btn>
      <v-card>
         <v-list dense>
            <v-list-tile
               v-for="notification in notifications"
               :key="notification"
               >
               <v-list-tile-title
                  v-text="notification"
                  />
            </v-list-tile>
         </v-list>
      </v-card>
   </v-menu>
   <v-menu
      offset-y
      content-class="dropdown-menu"
      transition="slide-y-transition">
      <template v-slot:activator="{ on }">
         <v-btn icon v-on="on">
            <v-avatar size="40" color="grey lighten-4">
               <img src="https://randomuser.me/api/portraits/men/85.jpg">
            </v-avatar>
         </v-btn>
      </template>
      <v-card>
         <v-list dense>
            <v-list-tile
               v-for="notification in header_menu"
               :key="notification"
               >
               <v-list-tile-action><v-icon>{{notification.icon}}</v-icon></v-list-tile-action>
               <v-list-tile-title
                  v-text="notification.title"
                  />
            </v-list-tile>
         </v-list>
      </v-card>
   </v-menu>
</v-toolbar-items>
</v-toolbar>
    </div>
</template>


<script>
export default {
    name: 'sidebar',
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
      ],
      notifications: [
        'Mike, John responded to your email',
        'You have 5 new tasks',
        'You\'re now a friend with Andrew',
        'Another Notification',
        'Another One'
      ] 
    }),
    props: {
      source: String
    }
}
</script>

<style scoped>
.v-list__tile__title a{
  text-decoration: none;
  color: black;
}
.router-link-active{
  color:navy !important;
}
.sidebar {
    background-image: url('@/../../../assets/images/sidebar.jpg');
    background-size: cover;
    overflow:hidden;
    background-position: 100%;
    z-index: 2;
    color: white;
    height: 100%;
    background-repeat: no-repeat !important;
}
</style>


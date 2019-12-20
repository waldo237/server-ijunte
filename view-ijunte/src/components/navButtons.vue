<template>
    <v-layout :column="(column) ?true:false">
       <!-- search guru starts -->
      <v-spacer />
      <v-btn v-if="!column" class="no-uppercase mr-10 seach-bar"  rounded>
        <v-text-field
          label="Busca un guru..."
          prepend-icon="mdi-magnify"
 
        ></v-text-field>
      </v-btn>
        <v-text-field
        v-if="column"
          label="Busca un guru..."
          append-icon="mdi-magnify"
 
        ></v-text-field>
      <v-spacer />
      <v-spacer />
  
    <!-- search guru ends -->
         <!-- la aldea starts -->
      <v-btn class="no-uppercase mx-1 azul5" text dark rounded  :class="(column) ?'ma-1':''">
        La aldea
      </v-btn>
    <!-- la aldea ends -->

    <!-- mi cuenta starts -->
      <v-btn class="no-uppercase pa-1 azul5" text rounded dark  :class="(column) ?'ma-1':''">
        <v-avatar size="30">
          <img :src="profilePhoto" alt="alt" class="mx-1" />
        </v-avatar>
        <span class="mx-1">Mi cuenta</span>
      </v-btn>
    <!-- mi cuenta ends -->

    <!-- messages starts -->
      <v-btn text :rounded="(column) ?true:false" :class="(column) ?'azul5 white--text ma-1':''">
        <v-icon>fa-comments</v-icon>
        <span v-if="column" class="mx-2">Chat</span>
      </v-btn>
    <!-- messages ends -->

    <!-- create groups starts -->
      <v-btn text :rounded="(column) ?true:false" :class="(column) ?'azul5 white--text ma-1':''">
        <v-icon>fa-users</v-icon>
        <span v-if="column" class="mx-2">Crear equipo</span>
      </v-btn>
    <!-- create groups ends -->

    <!-- notification starts -->
      <v-btn text :rounded="(column) ?true:false" :class="(column) ?'azul5 white--text ma-1':''">
        <v-icon>fa-bell</v-icon>
        <span v-if="column" class="mx-2">Notificaciones</span>
      </v-btn>
    <!-- notification ends -->

    <!-- more option starts -->
      <v-btn text v-if="!column">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <v-btn text v-if="column" :rounded="(column) ?true:false" :class="(column) ?'azul5 white--text ma-1':''">
        <v-icon>mdi-settings</v-icon>
        <span v-if="column" class="mx-2">ajustes</span>
      </v-btn>
    <!-- more option ends -->
    </v-layout>
</template>


<script>
export default {
    props:['lDrawer'],
     data() {
    return {
        column: this.lDrawer,
      profilePhoto:
        "https://scontent.fsti4-1.fna.fbcdn.net/v/t31.0-8/s960x960/1120010_10151816520622402_592851264_o.jpg?_nc_cat=110&_nc_ohc=SeoQ9v9RFa0AQm68uaBgJhNSRib7mNQr8qgFArLhcYBI79cqMGsTDBy6w&_nc_ht=scontent.fsti4-1.fna&oh=3bfcc7998cb47a693cc04851d3e2eff9&oe=5E679B26"
    };
  },
  watch:{
      lDrawer(){
          this.column = true;
      }
  }
}
</script>

<style scoped>
.no-uppercase {
  text-transform: none !important;
}
@media (min-width:1200px){
 .seach-bar {
   width: 500px;
    padding: 0% !important;
    margin: 0% !important;
  }
}
</style>
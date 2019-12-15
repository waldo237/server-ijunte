<template>
  <v-content class="home  py-5">
    <v-container fluid wrap>
      <v-layout row wrap justify-center>
        <v-card height="70px" width="100%" class="amarillo py-10"> </v-card>
        <v-avatar size="90px" class="mr-3 avatar">
          <img :src="photoURL" alt class=" foto azul5" />
        </v-avatar>
        <v-layout row wrap justify-start class="my-12">
          <!-- tabs start  -->
          <v-layout row wrap justify-center class="tabs">
          <v-card>
            <v-tabs
              v-model="tab"
                width="100%"
              centered
              
              icons-and-text
            >
              <v-tabs-slider></v-tabs-slider>

              <v-tab href="#tab-1">
                Recents
                <v-icon>mdi-phone</v-icon>
              </v-tab>

              <v-tab href="#tab-2">
                Favorites
                <v-icon>mdi-heart</v-icon>
              </v-tab>

              <v-tab href="#tab-3">
                Nearby
                <v-icon>mdi-account-box</v-icon>
              </v-tab>
            </v-tabs>

            <v-tabs-items v-model="tab">
              <v-tab-item v-for="i in 3" :key="i" :value="'tab-' + i">
                <v-card flat>
                  <v-card-text>{{ text }}</v-card-text>
                </v-card>
              </v-tab-item>
            </v-tabs-items>
          </v-card>
              
          </v-layout>

          <!-- tabs ends -->

          <v-card class="mx-5 px-2" flat>
            <v-card-title primary-title>
              <v-layout row wrap justify-start>
                Informacion Basica
              </v-layout>
            </v-card-title>
            <v-layout column>
              <span>Nombre: {{ displayName }}</span>
              <span>email: {{ email }}</span>
              <span> Username: {{ username }} </span>
              <span>Telefono: {{ telefono }} </span>
            </v-layout>
          </v-card>
        </v-layout>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
export default {
  data() {
    return {
      photoURL:
        "https://lh3.googleusercontent.com/-5M2WaEIxRkU/AAAAAAAAAAI/AAAAAAAAAAA/ACHi3rfQ6waT12umbptS90BE129NHPsbQg/photo.jpg?sz=46",
      displayName: "Waldo Milanes",
      email: "carlos@gmail.com",
      telefono: "904-343-4334",
      username: "elValdor",
      tabs: true,
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  }
};
</script>

<style>
.foto {
  padding: 2px;
}
.avatar {
  position: absolute !important;
  top: 50px;
  left: 20px;
}
.tabs{
    position: absolute !important;
  top:95px;
  left: 130px;  
}
</style>

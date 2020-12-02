<template>
  <div class="user-dropdown">
    <v-menu
      bottom
      close-on-click
      left
      min-width="150px"
      offset-y
      rounded
      transition="slide-y-transition"
    >
      <template v-slot:activator="{ on }">
        <span class="name">{{ name }}</span>
        <v-btn
          class="trigger"
          :ripple="false"
          v-on="on"
        >
          <v-avatar>
            <img :src="user.avatar" :alt="name">
          </v-avatar>
          <v-icon
            small
            color="white"
          >
            mdi-chevron-down
          </v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-list-item-content>
          <v-btn
            depressed
            block
            tile
            text
            @click="logout"
          >
            Salir
          </v-btn>
        </v-list-item-content>
      </v-card>
    </v-menu>
  </div>
</template>

<script src='./UserDropdown.js' />
<style lang='scss' src='./UserDropdown.scss' scoped />

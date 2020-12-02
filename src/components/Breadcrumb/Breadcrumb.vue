<template>
  <div class="breadcrumb">
    <v-breadcrumbs divider="/" :items="crumbs">
      <template v-slot:item="{ item }">
        <router-link
          class="v-breadcrumbs__item"
          :to="item.to"
          exact
        >
          {{ item.text }}
        </router-link>
      </template>
    </v-breadcrumbs>
  </div>
</template>

<script src='./Breadcrumb.js' />
<style lang='scss' src='./Breadcrumb.scss' />

<template>
  <div class="listado-de-software page">
    <div class="container">
      <div class="head">
        <span class="header">
          <v-icon>
            mdi-clipboard-list
          </v-icon>
          <h2>Listado de Software</h2>
        </span>

        <v-btn>
          <v-icon left>
            mdi-plus
          </v-icon>
          Agregar nuevo
        </v-btn>
      </div>

      <div class="body">
        <List>
          <router-link
            v-for="(item, index) in items"
            :key="item.id"
            :to="item.path"
            class="row"
          >
            <Indicator :num="index + 1" />
            <span class="name">{{ item.name }}</span>
            <span>{{ item.type }}</span>
            <span class="actions">
              <v-icon>mdi-chevron-right</v-icon>
            </span>
          </router-link>
        </List>
      </div>
    </div>
  </div>
</template>

<script src='./ListadoSoftware.js' />
<style lang="scss" src='./ListadoSoftware.scss' scoped />

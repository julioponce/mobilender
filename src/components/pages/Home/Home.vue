<template>
  <div class="home page">
    <div class="container">
      <div class="head">
        <h2>Dashboard</h2>
      </div>

      <div class="body">
        <router-link
          class="action-btn"
          :to="{ name: 'Buscar Creditos Grupales' }"
          title="Buscar Créditos Grupales"
        >
          <div class="box">
            <v-icon size="80">
              mdi-clipboard-text-multiple-outline
            </v-icon>
          </div>
          <span>Créditos Grupales</span>
        </router-link>

        <router-link
          class="action-btn"
          :to="{ name: 'Listado de Software' }"
          title="Listado de Software"
        >
          <div class="box">
            <v-icon size="80">
              mdi-laptop
            </v-icon>
          </div>
          <span>Listado de software</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script src='./Home.js' />
<style lang="scss" src='./Home.scss' scoped />

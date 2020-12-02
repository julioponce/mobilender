<template>
  <div class="inspeccionar page">
    <div class="container">
      <div class="head">
        <span class="header">
          <v-icon>
            mdi-magnify
          </v-icon>
          <h2>Inspeccionar</h2>
        </span>
      </div>

      <div class="body">
        <div class="search-box">
          <v-text-field
            v-model="search"
            autocomplete="off"
            dark
            outlined
            name="search"
            class="search"
            prepend-inner-icon="mdi-magnify"
            placeholder="Nº cliente, crédito, ID..."
          />
          <div class="results">
            ({{ itemsFiltered.length }} resultado{{ itemsFiltered.length === 1 ? '' : 's' }})
          </div>
        </div>

        <Table v-if="itemsFiltered.length > 0">
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>Cliente</th>
                  <th>RFC</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in itemsFiltered"
                  :key="item.id"
                >
                  <td>&nbsp;</td>
                  <td>
                    <span class="client">
                      <v-avatar>
                        <img :src="item.client.picture">
                      </v-avatar>
                      {{ item.client.name }}
                    </span>
                  </td>
                  <td>{{ item.rfc }}</td>
                  <td class="goto">
                    <router-link :to="{ name: 'Control de Cambios' }">
                      <v-icon size="25">
                        mdi-chevron-right
                      </v-icon>
                    </router-link>
                  </td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </Table>
      </div>
    </div>
  </div>
</template>

<script src='./Inspeccionar.js' />
<style lang="scss" src='./Inspeccionar.scss' />

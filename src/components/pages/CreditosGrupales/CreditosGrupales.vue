<template>
  <div class="creditos-grupales page">
    <div class="container">
      <div class="head">
        <span class="header">
          <v-icon>
            mdi-magnify
          </v-icon>
          <h2>Buscar Creditos Grupales</h2>
        </span>

        <v-btn :to="{ name: 'Inspeccionar' }">
          <v-icon left>
            mdi-magnify
          </v-icon>
          Inspeccionar
        </v-btn>
      </div>

      <div class="body">
        <Table>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>Archivo</th>
                  <th>Expedición</th>
                  <th>% Calidad de información</th>
                  <th>Estatus</th>
                  <th>Finalización</th>
                  <th>Usuario</th>
                  <th>Acciones</th>
                  <th>&nbsp;</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in items"
                  :key="item.name"
                >
                  <td class="file-name">
                    {{ item.file.name }}
                  </td>
                  <td>{{ item.expeditionDate }}</td>
                  <td class="text-center">
                    {{ item.dataQuality }}
                  </td>
                  <td :class="item.status | normalize">
                    {{ item.status }}
                  </td>
                  <td>{{ item.endingDate }}</td>
                  <td>{{ item.user }}</td>
                  <td class="actions">
                    <v-icon v-for="(action, index) in item.actions" :key="index" size="25">
                      {{ action.icon }}
                    </v-icon>
                  </td>
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

<script src='./CreditosGrupales.js' />
<style lang="scss" src='./CreditosGrupales.scss' scoped />

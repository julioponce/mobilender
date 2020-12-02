<template>
  <div class="control-cambios page">
    <div class="container">
      <div class="head">
        <span class="header">
          <v-icon>
            mdi-magnify
          </v-icon>
          <h2>Control de Cambios</h2>
        </span>
      </div>

      <div class="body">
        <Table>
          <v-simple-table>
            <template v-slot:default>
              <thead>
                <tr>
                  <th>&nbsp;</th>
                  <th>Fecha</th>
                  <th>Archivo</th>
                  <th>Cambios</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in items"
                  :key="item.id"
                >
                  <td><Indicator :num="item.id" /></td>
                  <td>{{ item.date }}</td>
                  <td class="file-name">
                    {{ item.file.name }}
                  </td>
                  <td>{{ item.update }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </Table>
      </div>
    </div>
  </div>
</template>

<script src='./ControlCambios.js' />
<style lang="scss" src='./ControlCambios.scss' scoped />

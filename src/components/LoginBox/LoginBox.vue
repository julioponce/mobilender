<template>
  <div class="login-box">
    <v-form ref="form" @submit.prevent="signIn">
      <v-text-field
        v-model="login.email"
        :rules="[rules.required, rules.email]"
        label="Email"
        name="email"
        filled
      />

      <v-text-field
        v-model="login.password"
        :rules="[rules.required]"
        label="Password"
        autocomplete="off"
        name="password"
        type="password"
        filled
      />

      <v-btn
        type="submit"
        class="login-btn md-primary fullwidth"
        :loading="loading"
      >
        Entrar
      </v-btn>
    </v-form>
  </div>
</template>

<script src="./LoginBox.js" />
<style lang="scss" src="./LoginBox.scss" />

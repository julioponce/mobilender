<template>
  <div class="toolbar">
    <div class="top">
      <div class="container">
        <nav>
          <Brand />
          <UserDropdown v-if="token" />
        </nav>
      </div>
    </div>

    <div v-if="token" class="bottom">
      <div class="container">
        <Breadcrumb />
      </div>
    </div>
  </div>
</template>

<script src='./Toolbar.js' />
<style lang='scss' src='./Toolbar.scss' scoped />

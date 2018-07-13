<template>
  <div>
    <div class="column flex-start">
      <label for="email">email:</label>
      <input :class="{ 'error': errors.has('email') }" type="email" name="email" v-validate="'required|email'">
      <span v-show="errors.has('email')" class="error">{{ errors.first('email') }}</span>
    </div>
    <div class="column flex-start">
      <label for="password">password:</label>
      <input type="password" name="password" v-validate="'required|min:6'">
    </div>
  </div>
</template>

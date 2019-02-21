<template>
  <v-form v-model="valid">
    <v-container>
      <v-layout wrap>
        <v-flex xs12>
          <h3 class="headline text-uppercase mb-0">
            My choice of beer
          </h3>
        </v-flex>
        <v-flex md4 xs12>
          <v-text-field
            v-model="firstname"
            label="Name"
            required
          />
        </v-flex>
        <v-flex xs12>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          />
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'BeerFilter',
  data: () => ({
    valid: true,
    name: ''
  })
}
</script>

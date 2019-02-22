<template>
  <v-form ref="form">
    <v-container>
      <v-layout wrap>
        <v-flex xs12>
          <h3 class="headline text-uppercase mb-0">
            My choice of beer
          </h3>
        </v-flex>
        <v-flex md4 xs12>
          <v-text-field
            v-model="name"
            label="Name of beer"
          />
        </v-flex>
        <v-flex md4 xs12>
          <v-menu
            v-model="menu"
            :close-on-content-click="false"
            :nudge-right="40"
            lazy
            transition="scale-transition"
            offset-y
            full-width
            min-width="290px"
          >
            <v-text-field
              slot="activator"
              v-model="brewedBefore"
              label="Brewed before"
              readonly
            />
            <v-date-picker v-model="brewedBefore" @input="menu = false" />
          </v-menu>
        </v-flex>
        <v-flex md4 xs12>
          <v-text-field
            v-model="food"
            label="Matching food"
          />
        </v-flex>
        <v-flex md4 xs12 class="pr-3">
          <v-subheader class="pl-0">
            Alcohol By Volume (%)
          </v-subheader>
          <v-range-slider
            v-model="abv"
            :thumb-size="24"
            thumb-label="always"
            :max="100"
            :min="0"
            :step="5"
          />
        </v-flex>
        <v-flex md4 xs12 class="pl-3">
          <v-subheader class="pl-0">
            Bitterness (0-100)
          </v-subheader>
          <v-range-slider
            v-model="ibu"
            :thumb-size="24"
            thumb-label="always"
            :max="100"
            :min="0"
            :step="5"
          />
        </v-flex>
        <v-flex xs12>
          <v-btn class="ml-0" color="primary" @click="submit">
            Get my beer
          </v-btn>
          <v-btn flat @click="reset">
            Reset
          </v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'BeerFilter',
  data: () => ({
    name: '',
    food: '',
    abv: [0, 100],
    ibu: [0, 100],
    brewedBefore: '',
    menu: false
  }),
  methods: {
    reset () {
      this.name = ''
      this.food = ''
      this.abv = [0, 100]
      this.ibu = [0, 100]
      this.brewedBefore = ''
      this.menu = false

      this.$emit('reset')
    },
    submit () {
      this.$emit('submit', { name: this.name, food: this.food, abv: this.abv, ibu: this.ibu, brewedBefore: this.brewedBefore })
    }
  }
}
</script>

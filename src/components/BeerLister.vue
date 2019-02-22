<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8>
            <v-alert
              :value="!!error"
              dismissible
              type="error"
              class="mb-3"
            >
              {{ error }}
            </v-alert>
            <v-card class="mb-3">
              <beer-filter @submit="getBeers" @reset="reset" />
            </v-card>
            <v-slide-y-transition>
              <beer-table v-show="searched" :beers="beers" :beers-loading="beersLoading" />
            </v-slide-y-transition>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import BeerService from '../service/BeerService'
import BeerFilter from './BeerFilter'
import BeerTable from './BeerTable'

export default {
  name: 'BeerLister',
  components: {
    BeerFilter,
    BeerTable
  },
  data: () => ({
    beers: [],
    error: null,
    beersLoading: false,
    searched: false
  }),
  methods: {
    async getBeers ({ name, brewedBefore, food, abv, ibu }) {
      try {
        this.beersLoading = true
        this.error = null

        const { data } = await BeerService.getBeers({
          beer_name: name || null,
          brewed_before: brewedBefore || null,
          food: food || null,
          abv_gt: abv[0],
          abv_lt: abv[1],
          ibu_gt: ibu[0],
          ibu_lt: ibu[1]
        })

        this.beersLoading = false
        this.beers = data
        this.searched = true
      } catch (error) {
        console.error(error)
        this.error = error.response.data.message
      }
    },
    reset () {
      this.searched = false
      this.error = null
      this.beers = []
    }
  }
}
</script>

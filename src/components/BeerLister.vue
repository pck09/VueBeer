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
              <v-card-title primary-title>
                <beer-filter />
              </v-card-title>
            </v-card>
            <v-data-table
              :headers="headers"
              :items="beers"
              :loading="beersLoading"
              class="elevation-1"
            >
              <v-progress-linear slot="progress" color="blue" indeterminate />
              <template slot="items" slot-scope="props">
                <td>{{ props.item.name }}</td>
                <td>
                  {{ props.item.abv }}
                </td>
                <td>
                  {{ props.item.ibu }}
                </td>
                <td>
                  {{ props.item.first_brewed }}
                </td>
                <td>
                  {{ props.item.tagline }}
                </td>
              </template>
            </v-data-table>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import BeerService from '../service/BeerService'
import BeerFilter from './BeerFilter'

export default {
  name: 'BeerTable',
  components: {
    BeerFilter
  },
  data: () => ({
    beers: [],
    headers: [
      { text: 'Name', value: 'name' },
      { text: 'Alcohol By Volume (%)', value: 'abv' },
      { text: 'Bitterness (0-100)', value: 'ibu' },
      { text: 'First brewed', value: 'first_brewed' },
      { text: 'Tagline', value: 'tagline' }
    ],
    error: null,
    beersLoading: false
  }),
  created () {
    this.getBeers()
  },
  methods: {
    async getBeers () {
      try {
        this.beersLoading = true
        const { data } = await BeerService.getBeers()
        this.beersLoading = false
        this.beers = data
      } catch (e) {
        this.error = e
        console.error(e)
      }
    }
  }
}
</script>

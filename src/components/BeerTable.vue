<template>
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
</template>

<script>
export default {
  name: 'BeerTable',
  props: {
    beers: {
      type: Array,
      default: () => []
    },
    beersLoading: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    headers: [
      { text: 'Name', value: 'name' },
      { text: 'Alcohol By Volume (%)', value: 'abv' },
      { text: 'Bitterness (0-100)', value: 'ibu' },
      { text: 'First brewed', value: 'first_brewed' },
      { text: 'Tagline', value: 'tagline' }
    ]
  })
}
</script>

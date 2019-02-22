<template>
  <beer-lister />
</template>

<style>
.application--wrap {
  background-color: #3949AB;
}
</style>

<script>
import BeerLister from './components/BeerLister'

export default {
  name: 'App',
  components: {
    BeerLister
  }
}
</script>

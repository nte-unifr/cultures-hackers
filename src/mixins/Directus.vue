<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        directus: {
          api: 'https://eddb.unifr.ch',
          path: '/items/fiches',
          project: 'cultures-hackers',
          map: {
            fields: 'id,titre,latitude,longitude,personnes_ou_organisations,annee,mois,jour,lieu',
            sort: 'id',
            limit: '-1',
            status: 'published'
          }
        }
      }
    },
    methods: {
      async fetchItems() {
        try {
          const response = await axios.get(this.directus.api + '/' + this.directus.project + this.directus.path, {
            params: {
              fields: this.directus.map.fields,
              sort: this.directus.map.sort,
              limit: this.directus.map.limit,
              status: this.directus.map.status
            }
          })
          return response.data.data
        } catch (error) {
          return []
        }
      },
      async fetchFilters(filter) {
        axios.get(this.directus.api + '/' + this.directus.project + '/items/' + filter + '?fields=*&sort=name').then(result => {
          this.choices = result.data.data
        })
      },
      getThumbnail(file, size) {
        let x = 400
        let type = 'crop'
        if (size === 800 || size === 2400) {
          x = size
          type = 'contain'
        }
        return this.directus.api + '/thumbnail/' + this.directus.project + '/' + x + '/' + x + '/' + type + '/best/' + file
      }
    }
  }
</script>
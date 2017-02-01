<template>
    <div>
        <h1>Weather forecast</h1>
        <p>This component demonstrates fetching data from the server.</p>
        <table v-if="forecasts" class='table'>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Temp. (C)</th>
                    <th>Temp. (F)</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="forecast in forecasts">
                    <td>{{ forecast.dateFormatted }}</td>
                    <td>{{ forecast.temperatureC }}</td>
                    <td>{{ forecast.temperatureF }}</td>
                    <td>{{ forecast.summary }}</td>
                </tr>
            </tbody>
        </table>
        <p v-else><em>Loading...</em></p>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        data () {
            return {
                // note: changing this line won't causes changes
                // with hot-reload because the reloaded component
                // preserves its current state and we are modifying
                // its initial state.
                forecasts: []
            }
        },
        mounted () {
            var self = this;
            axios.get('/api/SampleData/WeatherForecasts')
              .then(function (response) {
                  self.forecasts = response.data;
              })
              .catch(function (error) {
                  console.log(error);
              })
        }
    }
</script>

import { defineConfig } from 'cypress'

export default defineConfig({
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },

    video: false,
  },

  e2e: {
    baseUrl: 'http://localhost:3000',
    video: false,
  },

  env: {
    API_URL: 'https://api.dictionaryapi.dev/api/v2/entries/en',
  },
})

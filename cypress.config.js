import { defineConfig } from 'cypress';

export default defineConfig({
  projectId: '8e11b7b2-df81-41c3-a0e1-a522213ac3b7',
  e2e: {
    baseUrl: 'http://localhost:3000',
    setupNodeEvents() {
    },
  },
})

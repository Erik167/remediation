import { resolve } from 'path'

export default ({ mode }) => ({
  // root: '',
  // base: mode === 'development' ? '/' : '/dist/',
  build: {
    outDir: resolve(process.cwd(), 'public/dist'),
    emptyOutDir: true,

    lib: {
      entry: 'src/ts/index.ts', // Entry point for Node
      formats: ['es'], // CommonJS format for Node.js
    },
    rollupOptions: {
      external: ['express'], // Exclude external dependencies
    },

    // assetsDir: 'assets',

    // rollupOptions: {
    //   input: [
    //     resolve(process.cwd(), 'src/ts/client.ts'),
    //     resolve(process.cwd(), 'src/scss/index.scss')
    //   ],
    // },
  },
  server :{
    port: 1608
  }
})
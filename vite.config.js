// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// <<<<<<< HEAD
// =======
//   base: '/',
// >>>>>>> 0b434373c9cf133720fd4eb8e3724d9d2aeae501
//   server: {
//     port: 3000,
//     open: true
//   }
// });



import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    port: 3000,
    open: true
  }
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],

//   server: {
//     proxy: {
//       '/api': {
//         target: 'https://edu-project-backend.onrender.com',
//         changeOrigin: true,
//       },
//     },
//   },
// })

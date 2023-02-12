const path = require('path');

const resolvePath = (p) => path.resolve(__dirname, p);

module.exports = {
  // ...
  webpack: {
    alias: {
      '@components': resolvePath('./src/components'),
      '@containers': resolvePath('./src/containers'),
      '@assets': resolvePath('./src/assets'),
      '@lib': resolvePath('./src/lib'),
      '@hooks': resolvePath('./src/hooks'),
      '@utils': resolvePath('./src/utils'),
      '@ui': resolvePath('./src/ui'),
    },
  },
  // ...
};

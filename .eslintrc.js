module.exports = {
  root: true,
  extends: [
    'react-app',
    'standard-with-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
    'prettier/standard'
  ],
  parserOptions: {
    project: './tsconfig.json'
  }
}

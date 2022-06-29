module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  }, // javascript 환경
  parserOptions: {
    ecmaVersion: 8, // ECMA 버전
    ecmaFeatures: {
      jsx: true, // jsx 활성화 여부
      tsx: true, // tsx 활성화 여부
    },
  },
  ignorePatterns: ["node_modules/*", ".next/*"], // 무시할 파일/폴더
  extends: ["eslint:recommended"], // 확장 라이브러리
};

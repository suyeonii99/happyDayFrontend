module.exports = {
  semi: true, // 세미콜론(;) 사용 여부
  trailingComma: "all", // 객체나 배열을 선언할 때 마지막 값에도 모두 콤마를 붙임
  singleQuote: true, // 혿따옴표를 씀
  printWidth: 140, // 한줄에 140자까지 허용하고 넘으면 자동으로 줄넘김
  tabWidth: 4, // 탭 하나에 스페이스 4개
  parser: "typescript", // typescript 사용
  jsxBracketSameLine: false, // jsx 즉 마크업 문법에서 ... /> 이거 같은라인에 쓸 지 다음라인으로 넘길지
  arrowParens: "always", // 화살표 함수에서 괄호를 무조건 붙임
};

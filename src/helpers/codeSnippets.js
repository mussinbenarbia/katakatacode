module.exports = [
  {
    code: `int main () {\n\tcout << "Hello World!";\n\treturn 0;\n}`,
    language: "cpp",
  },
  {
    code: `const user = {\n\tname: "Simon W.",\n\tage: 28\n};`,
    language: "javascript",
  },
  {
    code: `let arr = testArr.match("/[A-Z]/g", "pizza");`,
    language: "javascript",
  },
  {
    code: `let result = something.map(el => <span>yo</span>);`,
    language: "javascript",
  },
  {
    code: `x = lambda a : a + 10`,
    language: "python",
  },
  {
    code: `const code = codeArray[Math.floor(Math.random() * codeArray.length)];`,
    language: "javascript",
  },
  {
    code: `def require_all_files(path)\n\t$:.push path\n\trbfiles = Dir.entries(path).select {|x| /\\.rb\\z/ =~ x}\n\tend`,
    language: "ruby",
  },
  {
    code: `SELECT * FROM A x LEFT JOIN B y ON y.aId = x.Id`,
    language: "sql",
  },
];
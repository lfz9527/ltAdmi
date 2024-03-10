module.exports = {
  printWidth: 100, // 每行代码的最大长度
  tabWidth: 2, // 一个制表符等于几个空格
  useTabs: false, // 是否使用tab
  semi: false, // 表示是否在语句末尾添加分号
  vueIndentScriptAndStyle: true, //  设置为 true 时，ESLint 将会缩进 <script> 和 <style> 标签中的内容
  singleQuote: true, // 是否使用单引号
  quoteProps: 'as-needed', // 当 quoteProps 设置为 "as-needed" 时，Prettier 会尽可能地省略对象属性的引号，只在必要的情况下添加引号；
  bracketSpacing: true, // 用于指定对象字面量中大括号的空格使用方式。当 bracketSpacing 设置为 true 时，Prettier 会在对象字面量的大括号内部添加空格
  trailingComma: 'es5', // 用于指定是否在多行对象字面量和数组字面量的最后一项后面添加逗号,或者仅在'es5'后面添加逗号
  jsxBracketSameLine: false, // 用于指定在 JSX 元素的大括号位置。当 jsxBracketSameLine 设置为 true 时，JSX 元素的大括号会与元素名称放在同一行；当设置为 false 时，大括号会另起一行显示。
  jsxSingleQuote: false, // 用于指定在 JSX 中是否使用单引号来包裹属性值。当 jsxSingleQuote 设置为 true 时，Prettier 会在 JSX 属性中使用单引号；当设置为 false 时，则会使用双引号。
  arrowParens: 'always', // 用于指定箭头函数的参数是否需要使用括号
  insertPragma: false, // 用于指定是否在文件顶部插入一个特殊的注释，以指示该文件已经通过 Prettier 格式化。
  requirePragma: false, // 用于指定是否要求文件顶部必须包含特定的 pragma 注释，以指示该文件需要经过 Prettier 格式化
  proseWrap: 'never', // 用于指定如何处理代码中的文本内容（即非代码部分）的换行方式。
  htmlWhitespaceSensitivity: 'strict', // 用于指定在 HTML 文件中如何处理空白符的敏感度。
  /**
   * "css"：Prettier 将尽量保持 CSS 样式中的空白符不变，但会根据需要格式化 HTML 标签之间的空白符。
   * "strict"：Prettier 将会尽量保持所有空白符不变，包括 HTML 标签和 CSS 样式中的空白符。
   * "ignore"：Prettier 将会忽略 HTML 文件中的所有空白符，除非它们出现在 <pre> 标签内。
   */
  endOfLine: 'crlf',
  /**
   * "auto"：Prettier 将根据文件中第一次出现的换行符来决定使用何种换行符类型。如果文件中已经存在换行符，Prettier 会保持一致地使用相同的换行符类型。如果文件中没有换行符，Prettier 会使用操作系统默认的换行符类型。
   * "lf"：Prettier 将始终使用 LF（换行符），即 \n。
   * "crlf"：Prettier 将始终使用 CRLF（回车符 + 换行符），即 \r\n。
   */
  rangeStart: 0, // 每个文件格式化的范围是文件的全部内容
}

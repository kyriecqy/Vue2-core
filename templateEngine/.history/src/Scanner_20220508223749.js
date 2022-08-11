/*
     扫描器类
*/

export default class Scanner {
  constructor(templateStr) {
    console.log(templateStr);
    this.templateStr = templateStr
    //指针
    this.pos = 0
    //尾巴字符串
    //指针指到的当前字符的后面的字符串(包括指针)被称为尾巴字符串
    //尾巴字符串的精妙之处在于，我们只要判断尾巴字符串的开头字符是不是指定内容(双大括号)，
    //就可以决定指针是继续往后走还是跳过
    this.tail = templateStr
  }
  //模板字符串 'my name is {{myName}}, age is {{age}}'要转化为tokens，
  //mustache内部定义了两个方法来转化 scan() 和 scanUntil()
  
  // scan: 匹配到指定内容(双大括号)，并跳过他，没有返回值
  scan(tag) {
    if(this.tail.indexOf(tag) == 0) {
      //只要让指针向后移 tag的长度 就可以实现跳过指定内容的功能
      this.pos += tag.length
      this.tail = this.templateStr.substring(this.pos)
    }
  }
  //scanUntil: 指针从模板字符串的开头开始扫描，
  //直到遇到指定内容(双大括号)结束，返回结束之前路过的字符串
  scanUntil(stopTag) {
    //记录本方法执行前pos指针的位置
    const pos_start = this.pos
    //当尾巴字符串的开头不是指定目标时循环进行
    // &&后面的判断语句很有必要，防止因为找不到指定目标而进入死循环
    while(this.tail.indexOf(stopTag) != 0 && !this.eos()) {
      //指针后移
      this.pos++
      //更新尾巴字符串为当前指针后面(包含指针)的字符串
      this.tail = this.templateStr.substring(this.pos)
      
    }
    //返回从本方法执行前位置到结束指针位置的字符串，
    //substring默认前闭后开,this.pos正好指向指定内容位置，不会被包含进去
    return this.templateStr.substring(pos_start, this.pos)
  }
  
  //eos:end of string 判断指针是否到模板字符串最后
  //返回一个布尔值 到最后了返回true
  eos() {
    return this.pos >= this.templateStr.length
  }
}
// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#EAF5FF",100:"#CBE7FE",200:"#98CDFD",300:"#65B2FC",400:"#3295FB",500:"#0064FA",600:"#0062DD",700:"#0057C1",800:"#0048A5",900:"#003A88",950:"#002C6B"},
      gray:{50:"#F9F9F9",100:"#E6E8EA",200:"#C6CACD",300:"#A7ABB0",400:"#888D92",500:"#6B7075",600:"#595F65",700:"#494E54",800:"#393E44",900:"#2A2E34",950:"#1C1F23"},
      success:"#3BB346", warning:"#FC8800", critical:"#F93920",
    },
    borderRadius:{ btn:"6px", card:"6px", input:"6px" },
    fontFamily:{ sans:["Inter","PingFang SC","Helvetica Neue","system-ui","sans-serif"] },
  }}
}

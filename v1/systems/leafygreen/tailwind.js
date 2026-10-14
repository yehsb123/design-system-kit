// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#E3FCF7",100:"#CEFBED",200:"#B0F9DD",300:"#81F7C3",400:"#44F298",500:"#00ED64",600:"#00C15F",700:"#009758",800:"#00744E",900:"#015340",950:"#023430"},
      gray:{50:"#F9FBFA",100:"#EFF3F1",200:"#E0E5E4",300:"#C9CFCD",400:"#AAB2B3",500:"#889397",600:"#65747C",700:"#495B64",800:"#30414B",900:"#1A2C37",950:"#112733"},
      success:"#00A35C", warning:"#FFC010", critical:"#DB3030",
    },
    borderRadius:{ btn:"6px", card:"16px", input:"6px" },
    fontFamily:{ sans:["Euclid Circular A","Inter","-apple-system","system-ui","sans-serif"] },
  }}
}

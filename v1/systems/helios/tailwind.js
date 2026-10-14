// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#F2F8FF",100:"#E3F0FF",200:"#D4E7FE",300:"#A6C9FE",400:"#5B94FF",500:"#1060FF",600:"#0D58ED",700:"#054CDB",800:"#0B3FA3",900:"#1A3057",950:"#111F39"},
      gray:{50:"#FFFFFF",100:"#FAFAFA",200:"#F1F2F3",300:"#DEDFE3",400:"#C2C5CB",500:"#8C909C",600:"#757985",700:"#5D616C",800:"#43464F",900:"#28292F",950:"#0C0C0E"},
      success:"#008A22", warning:"#BB5A00", critical:"#E52228",
    },
    borderRadius:{ btn:"5px", card:"6px", input:"5px" },
    fontFamily:{ sans:["Open Sans","Inter","-apple-system","system-ui","sans-serif"] },
  }}
}

// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#F5F9FF",100:"#D0E5FE",200:"#9AC2FC",300:"#6A96FE",400:"#4871FE",500:"#274DEA",600:"#1B3CC8",700:"#132EA0",800:"#0E2377",900:"#0E194B",950:"#070B1E"},
      gray:{50:"#FFFFFF",100:"#F3F3F3",200:"#E1E1E1",300:"#C6C6C6",400:"#717171",500:"#292929",600:"#202020",700:"#171717",800:"#0F0F0F",900:"#080808",950:"#000000"},
      success:"#036E45", warning:"#A73E00", critical:"#B72818",
    },
    borderRadius:{ btn:"999px", card:"8px", input:"4px" },
    fontFamily:{ sans:["Source Sans 3","Adobe Clean","-apple-system","system-ui","sans-serif"] },
  }}
}

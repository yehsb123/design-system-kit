// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#E8F5FF",100:"#C6E4FF",200:"#84C7FF",300:"#399FFF",400:"#077BDE",500:"#005EA2",600:"#045591",700:"#094C80",800:"#0C4270",900:"#0F395F",950:"#112F4E"},
      gray:{50:"#FBFCFD",100:"#F5F6F7",200:"#EDEFF0",300:"#C6CACE",400:"#8D9297",500:"#565C65",600:"#474E59",700:"#3A404A",800:"#303336",900:"#262729",950:"#1C1D1F"},
      success:"#00A91C", warning:"#FFBE2E", critical:"#E52207",
    },
    borderRadius:{ btn:"4px", card:"4px", input:"4px" },
    fontFamily:{ sans:["Public Sans","Source Sans Pro","-apple-system","system-ui","sans-serif"] },
  }}
}

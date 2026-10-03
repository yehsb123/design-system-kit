// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#FAFAFA",100:"#F0F0F0",200:"#D8D8D8",300:"#9A9A9A",400:"#6D6D6D",500:"#181818",600:"#0F0F0F",700:"#0A0A0A",800:"#050505",900:"#000000",950:"#000000"},
      gray:{50:"#FAFAFA",100:"#F2F2F2",200:"#E4E4E4",300:"#CFCFCF",400:"#9A9A9A",500:"#808080",600:"#6D6D6D",700:"#636363",800:"#3A3A3A",900:"#181818",950:"#000000"},
      success:"#52B063", warning:"#E8900D", critical:"#A52D25",
    },
    borderRadius:{ btn:"75px", card:"0px", input:"0px" },
    fontFamily:{ sans:["Inter","Roobert","Helvetica Neue","Arial","sans-serif"] },
  }}
}

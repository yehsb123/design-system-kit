// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#FFF0F3",100:"#FFDBE2",200:"#FFB3C2",300:"#FF859E",400:"#FF5A7C",500:"#FF385C",600:"#E61E48",700:"#BD163A",800:"#8F102B",900:"#5E0A1C",950:"#33050F"},
      gray:{50:"#F7F7F7",100:"#EBEBEB",200:"#DDDDDD",300:"#C2C2C2",400:"#A0A0A0",500:"#767676",600:"#5E5E5E",700:"#484848",800:"#2E2E2E",900:"#1A1A1A",950:"#0D0D0D"},
      success:"#008A05", warning:"#FFB400", critical:"#C13515",
    },
    borderRadius:{ btn:"10px", card:"16px", input:"10px" },
    fontFamily:{ sans:["Manrope","-apple-system","system-ui","sans-serif"] },
  }}
}

// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#FFF7F7",100:"#FFE9E9",200:"#FED1D1",300:"#F78F8F",400:"#ED4B4B",500:"#E60023",600:"#CC0000",700:"#B60000",800:"#9B0000",900:"#800000",950:"#660000"},
      gray:{50:"#F9F9F9",100:"#F1F1F1",200:"#E9E9E9",300:"#CDCDCD",400:"#A5A5A5",500:"#767676",600:"#646464",700:"#525252",800:"#3E3E3E",900:"#272727",950:"#191919"},
      success:"#1DAD65", warning:"#FF5B45", critical:"#CC0000",
    },
    borderRadius:{ btn:"999px", card:"16px", input:"8px" },
    fontFamily:{ sans:["Helvetica Neue","Pretendard","-apple-system","system-ui","sans-serif"] },
  }}
}

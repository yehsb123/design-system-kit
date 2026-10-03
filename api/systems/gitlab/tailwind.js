// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#FFF3EC",100:"#FDE0CE",200:"#FCC09B",300:"#FB9A67",400:"#FC7C3F",500:"#FC6D26",600:"#E24329",700:"#B93316",800:"#8A2610",900:"#5C1909",950:"#300C04"},
      gray:{50:"#FBFAFD",100:"#ECECEF",200:"#DCDCDE",300:"#BABABF",400:"#89888D",500:"#666666",600:"#525252",700:"#404040",800:"#2B2B2B",900:"#1F1E24",950:"#0F0E12"},
      success:"#108548", warning:"#C17D10", critical:"#DD2B0E",
    },
    borderRadius:{ btn:"6px", card:"8px", input:"6px" },
    fontFamily:{ sans:["Sora","-apple-system","system-ui","sans-serif"] },
  }}
}

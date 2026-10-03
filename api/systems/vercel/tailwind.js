// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#FAFAFA",100:"#EDEDED",200:"#D4D4D4",300:"#A3A3A3",400:"#666666",500:"#171717",600:"#0A0A0A",700:"#000000",800:"#000000",900:"#000000",950:"#000000"},
      gray:{50:"#FAFAFA",100:"#F2F2F2",200:"#EBEBEB",300:"#E0E0E0",400:"#A1A1A1",500:"#737373",600:"#525252",700:"#404040",800:"#262626",900:"#171717",950:"#0A0A0A"},
      success:"#0CB85F", warning:"#D5880B", critical:"#EE0000",
    },
    borderRadius:{ btn:"6px", card:"8px", input:"6px" },
    fontFamily:{ sans:["DM Sans","-apple-system","system-ui","sans-serif"] },
  }}
}

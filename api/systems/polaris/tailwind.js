// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#E6F4F0",100:"#C1E5DB",200:"#8CCBB8",300:"#56B195",400:"#2E9A79",500:"#008060",600:"#006C51",700:"#005541",800:"#003E30",900:"#00291F",950:"#001510"},
      gray:{50:"#FAFBFB",100:"#F1F2F4",200:"#E3E5E7",300:"#C9CCD0",400:"#AEB4B9",500:"#8A8F94",600:"#6D7175",700:"#4A4E52",800:"#303030",900:"#1A1C1D",950:"#0B0C0D"},
      success:"#29845A", warning:"#C77E0A", critical:"#D72C0D",
    },
    borderRadius:{ btn:"8px", card:"12px", input:"8px" },
    fontFamily:{ sans:["Inter","-apple-system","system-ui","sans-serif"] },
  }}
}

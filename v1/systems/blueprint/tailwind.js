// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#EDF4FF",100:"#B1D2FF",200:"#7EB2FC",300:"#5899F3",400:"#4084E4",500:"#2D72D2",600:"#2665BE",700:"#1F59AA",800:"#1A4E96",900:"#12396F",950:"#0A1F3D"},
      gray:{50:"#F6F7F9",100:"#E1E5E9",200:"#C8CED5",300:"#8994A3",400:"#4C5664",500:"#2F343C",600:"#2B3038",700:"#272C33",800:"#23282F",900:"#20252B",950:"#1C2127"},
      success:"#238551", warning:"#C87619", critical:"#CD4246",
    },
    borderRadius:{ btn:"2px", card:"2px", input:"2px" },
    fontFamily:{ sans:["Inter","-apple-system","BlinkMacSystemFont","system-ui","sans-serif"] },
  }}
}

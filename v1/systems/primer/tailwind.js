// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#DDF4FF",100:"#B6E3FF",200:"#80CCFF",300:"#54AEFF",400:"#218BFF",500:"#0969DA",600:"#0655B7",700:"#044599",800:"#06387D",900:"#082D65",950:"#002155"},
      gray:{50:"#F6F8FA",100:"#EAEDF1",200:"#DFE5EA",300:"#D3DAE1",400:"#ACB5C0",500:"#59636E",600:"#4D555E",700:"#434951",800:"#3B4249",900:"#31363C",950:"#25292E"},
      success:"#1A7F37", warning:"#BC4C00", critical:"#CF222E",
    },
    borderRadius:{ btn:"6px", card:"6px", input:"6px" },
    fontFamily:{ sans:["-apple-system","BlinkMacSystemFont","Segoe UI","Noto Sans","Helvetica","Arial","sans-serif"] },
  }}
}

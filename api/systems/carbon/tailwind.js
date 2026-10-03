// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#EDF5FF",100:"#D0E2FF",200:"#A6C8FF",300:"#78A9FF",400:"#4589FF",500:"#0F62FE",600:"#0043CE",700:"#002D9C",800:"#001D6C",900:"#001141",950:"#000A26"},
      gray:{50:"#F4F4F4",100:"#E0E0E0",200:"#C6C6C6",300:"#A8A8A8",400:"#8D8D8D",500:"#6F6F6F",600:"#525252",700:"#393939",800:"#262626",900:"#161616",950:"#0B0B0B"},
      success:"#198038", warning:"#8E6A00", critical:"#DA1E28",
    },
    borderRadius:{ btn:"0px", card:"0px", input:"0px" },
    fontFamily:{ sans:["IBM Plex Sans","system-ui","sans-serif"] },
  }}
}

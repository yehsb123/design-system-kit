// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#F7EFF8",100:"#EDD8EF",200:"#DBB2DF",300:"#C583CB",400:"#A94FB2",500:"#8A2E95",600:"#6E2277",700:"#571C5E",800:"#4A154B",900:"#33103A",950:"#1E0A22"},
      gray:{50:"#F8F8FA",100:"#F0F0F2",200:"#E2E2E6",300:"#C9C9CF",400:"#9B9BA3",500:"#6E6E77",600:"#545459",700:"#3F3F44",800:"#2A2A2E",900:"#1A1A1D",950:"#0D0D0F"},
      success:"#189A63", warning:"#CE9313", critical:"#E01E5A",
    },
    borderRadius:{ btn:"8px", card:"12px", input:"8px" },
    fontFamily:{ sans:["Pretendard","-apple-system","system-ui","sans-serif"] },
  }}
}

// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#E5F1FF",100:"#CCE4FF",200:"#99C9FF",300:"#66ADFF",400:"#3392FF",500:"#007AFF",600:"#0062CC",700:"#004999",800:"#003166",900:"#001833",950:"#000C1A"},
      gray:{50:"#F2F2F7",100:"#E5E5EA",200:"#D1D1D6",300:"#C7C7CC",400:"#AEAEB2",500:"#8E8E93",600:"#636366",700:"#48484A",800:"#3A3A3C",900:"#1C1C1E",950:"#0A0A0B"},
      success:"#34C759", warning:"#FF9500", critical:"#FF3B30",
    },
    borderRadius:{ btn:"12px", card:"14px", input:"10px" },
    fontFamily:{ sans:["-apple-system","SF Pro Text","SF Pro Display","Helvetica Neue","Arial","sans-serif"] },
  }}
}

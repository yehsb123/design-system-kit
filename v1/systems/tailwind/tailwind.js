// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#F0F9FF",100:"#E0F2FE",200:"#BAE6FD",300:"#7DD3FC",400:"#38BDF8",500:"#0EA5E9",600:"#0284C7",700:"#0369A1",800:"#075985",900:"#0C4A6E",950:"#082F49"},
      gray:{50:"#F8FAFC",100:"#F1F5F9",200:"#E2E8F0",300:"#CBD5E1",400:"#94A3B8",500:"#64748B",600:"#475569",700:"#334155",800:"#1E293B",900:"#0F172A",950:"#020617"},
      success:"#10B981", warning:"#F59E0B", critical:"#F43F5E",
    },
    borderRadius:{ btn:"6px", card:"8px", input:"6px" },
    fontFamily:{ sans:["Inter","system-ui","-apple-system","sans-serif"] },
  }}
}

// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#EEF0FE",100:"#E0E3FD",200:"#C4C9FB",300:"#A0A7F7",400:"#7C82F0",500:"#4F46E5",600:"#4338CA",700:"#3730A3",800:"#312E81",900:"#2A2765",950:"#1B1947"},
      gray:{50:"#F8FAFC",100:"#F1F5F9",200:"#E2E8F0",300:"#CBD5E1",400:"#94A3B8",500:"#64748B",600:"#475569",700:"#334155",800:"#1E293B",900:"#0F172A",950:"#020617"},
      success:"#00C24F", warning:"#F59E0B", critical:"#F72424",
    },
    borderRadius:{ btn:"6px", card:"10px", input:"6px" },
    fontFamily:{ sans:["Pretendard","-apple-system","system-ui","sans-serif"] },
  }}
}

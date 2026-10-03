// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#ECFDFA",100:"#CFF9F0",200:"#9FF0E0",300:"#5FE3CC",400:"#26CDB3",500:"#0FB39B",600:"#08917F",700:"#0A7266",800:"#0C5A51",900:"#0A3F3A",950:"#052422"},
      gray:{50:"#F7F9FA",100:"#EEF1F3",200:"#E0E5E8",300:"#C6CDD2",400:"#99A4AC",500:"#6E7A82",600:"#515C64",700:"#3B444B",800:"#262D32",900:"#151A1E",950:"#0A0D0F"},
      success:"#16C784", warning:"#FFB020", critical:"#F53E43",
    },
    borderRadius:{ btn:"14px", card:"20px", input:"12px" },
    fontFamily:{ sans:["Pretendard","Inter","-apple-system","system-ui","sans-serif"] },
  }}
}

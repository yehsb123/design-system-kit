// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#E0F0FF",100:"#C1DEFD",200:"#A2CDFA",300:"#72B1F1",400:"#368BE0",500:"#0066CC",600:"#0057AD",700:"#00488F",800:"#003870",900:"#012C58",950:"#032142"},
      gray:{50:"#F2F2F2",100:"#E0E0E0",200:"#C7C7C7",300:"#A3A3A3",400:"#8C8C8C",500:"#707070",600:"#4D4D4D",700:"#383838",800:"#292929",900:"#1F1F1F",950:"#151515"},
      success:"#3D7317", warning:"#CA6C0F", critical:"#EE0000",
    },
    borderRadius:{ btn:"3px", card:"8px", input:"3px" },
    fontFamily:{ sans:["Red Hat Text","Red Hat Display","-apple-system","system-ui","sans-serif"] },
  }}
}

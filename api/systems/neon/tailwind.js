// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#F3F0FF",100:"#E9E3FF",200:"#D4C6FF",300:"#B69EFF",400:"#9A75FF",500:"#7C4DFF",600:"#6A2EF5",700:"#5A1FD9",800:"#4A1AAF",900:"#3A1785",950:"#240E52"},
      gray:{50:"#F5F6FA",100:"#E9EBF2",200:"#D2D6E3",300:"#A9AEC4",400:"#7B819C",500:"#565B75",600:"#3D4157",700:"#2A2D3E",800:"#1B1D2A",900:"#0F1018",950:"#07080D"},
      success:"#00C48F", warning:"#F59E00", critical:"#F5155F",
    },
    borderRadius:{ btn:"14px", card:"20px", input:"12px" },
    fontFamily:{ sans:["Space Grotesk","Pretendard","system-ui","sans-serif"] },
  }}
}

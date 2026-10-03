// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#FBEEEE",100:"#F6D6D6",200:"#EDACAC",300:"#E07E7E",400:"#CE5151",500:"#B91C1C",600:"#9E1414",700:"#7E1010",800:"#5C0C0C",900:"#3D0808",950:"#200404"},
      gray:{50:"#FAF8F3",100:"#F1EDE4",200:"#E2DBCC",300:"#C9BFAA",400:"#A99C80",500:"#857A5F",600:"#625A45",700:"#453F30",800:"#2B2820",900:"#1A1813",950:"#0D0C09"},
      success:"#2E7D32", warning:"#B7791F", critical:"#B91C1C",
    },
    borderRadius:{ btn:"2px", card:"4px", input:"2px" },
    fontFamily:{ sans:["Playfair Display","Noto Serif KR","Georgia","serif"] },
  }}
}

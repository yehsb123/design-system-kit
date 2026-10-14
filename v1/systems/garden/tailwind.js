// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#ECF9F9",100:"#D4E9E8",200:"#A1C6C6",300:"#64A2A3",400:"#448586",500:"#16494F",600:"#093C43",700:"#042D33",800:"#041F22",900:"#061415",950:"#060E0E"},
      gray:{50:"#F8F9F9",100:"#E5E7E9",200:"#C8CED1",300:"#9DA7AF",400:"#87929B",500:"#5C6970",600:"#39434B",700:"#293239",800:"#1C2227",900:"#151A1E",950:"#0A0D0E"},
      success:"#037F52", warning:"#AC5918", critical:"#CD3642",
    },
    borderRadius:{ btn:"4px", card:"4px", input:"4px" },
    fontFamily:{ sans:["system-ui","-apple-system","Segoe UI","Roboto","sans-serif"] },
  }}
}

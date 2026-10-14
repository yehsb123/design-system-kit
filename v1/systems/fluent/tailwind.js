// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#F3F9FD",100:"#C8E3F7",200:"#8AC3ED",300:"#459DE1",400:"#1F89DA",500:"#0078D4",600:"#006CBF",700:"#005BA1",800:"#004377",900:"#002440",950:"#001322"},
      gray:{50:"#FCFCFC",100:"#E6E6E6",200:"#CCCCCC",300:"#B3B3B3",400:"#999999",500:"#808080",600:"#676767",700:"#4F4F4F",800:"#363636",900:"#1E1E1E",950:"#050505"},
      success:"#107C10", warning:"#EAA300", critical:"#D13438",
    },
    borderRadius:{ btn:"4px", card:"8px", input:"4px" },
    fontFamily:{ sans:["Segoe UI Variable","Segoe UI","system-ui","-apple-system","sans-serif"] },
  }}
}

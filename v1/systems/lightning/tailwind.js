// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#EEF4FF",100:"#D8E6FE",200:"#AACBFF",300:"#71ADFD",400:"#339BFE",500:"#0176D3",600:"#0B5CAB",700:"#014486",800:"#032D60",900:"#03234D",950:"#001639"},
      gray:{50:"#FFFFFF",100:"#EBEBEB",200:"#C9C9C9",300:"#AEAEAE",400:"#9B9B9B",500:"#757575",600:"#5C5C5C",700:"#444444",800:"#2E2E2E",900:"#242424",950:"#181818"},
      success:"#2E844A", warning:"#A96404", critical:"#EA001E",
    },
    borderRadius:{ btn:"4px", card:"4px", input:"4px" },
    fontFamily:{ sans:["Salesforce Sans","Inter","-apple-system","system-ui","sans-serif"] },
  }}
}

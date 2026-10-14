// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#EEF4FF",100:"#CFE1FE",200:"#96C0FE",300:"#64A8FD",400:"#2799FF",500:"#0176D3",600:"#0B5CAB",700:"#014486",800:"#032D60",900:"#03234D",950:"#001639"},
      gray:{50:"#FFFFFF",100:"#EDEDED",200:"#CFCFCF",300:"#ABABAB",400:"#989898",500:"#747474",600:"#5C5C5C",700:"#444444",800:"#2E2E2E",900:"#242424",950:"#181818"},
      success:"#2E844A", warning:"#A96404", critical:"#EA001E",
    },
    borderRadius:{ btn:"4px", card:"4px", input:"4px" },
    fontFamily:{ sans:["Salesforce Sans","Inter","-apple-system","system-ui","sans-serif"] },
  }}
}

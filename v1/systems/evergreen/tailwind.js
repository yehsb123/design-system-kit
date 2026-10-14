// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#F3F6FF",100:"#E7EDFF",200:"#C6D4FF",300:"#95AFFF",400:"#648BFF",500:"#3366FF",600:"#2B56D6",700:"#2345AD",800:"#1B3585",900:"#12255C",950:"#0A1433"},
      gray:{50:"#FAFBFF",100:"#F6F8FB",200:"#F3F4F8",300:"#E7E9F1",400:"#CFD1DF",500:"#8F95B2",600:"#787E9B",700:"#626884",800:"#4E546E",900:"#313857",950:"#101840"},
      success:"#52BD95", warning:"#FFB020", critical:"#D14343",
    },
    borderRadius:{ btn:"4px", card:"8px", input:"4px" },
    fontFamily:{ sans:["SF Pro Text","-apple-system","Inter","system-ui","sans-serif"] },
  }}
}

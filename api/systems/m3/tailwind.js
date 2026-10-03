// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#F6EDFF",100:"#EADDFF",200:"#D0BCFF",300:"#B69DF8",400:"#9A82DB",500:"#7F67BE",600:"#6750A4",700:"#4F378B",800:"#381E72",900:"#21005D",950:"#16003D"},
      gray:{50:"#F5EFF7",100:"#E6E1E5",200:"#CAC4D0",300:"#AEA9B4",400:"#938F99",500:"#79747E",600:"#605D64",700:"#49454F",800:"#313033",900:"#1C1B1F",950:"#131316"},
      success:"#4CAF50", warning:"#FF9800", critical:"#DC362E",
    },
    borderRadius:{ btn:"999px", card:"16px", input:"4px" },
    fontFamily:{ sans:["Roboto","Helvetica Neue","Arial","sans-serif"] },
  }}
}

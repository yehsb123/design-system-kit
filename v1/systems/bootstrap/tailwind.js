// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#EDF4FF",100:"#CFE2FF",200:"#9EC5FE",300:"#6EA8FE",400:"#3D8BFD",500:"#0D6EFD",600:"#0B5CD4",700:"#094BAC",800:"#073984",900:"#05285B",950:"#031633"},
      gray:{50:"#F8F9FA",100:"#E9ECEF",200:"#DEE2E6",300:"#CED4DA",400:"#ADB5BD",500:"#6C757D",600:"#575F66",700:"#454C52",800:"#383E45",900:"#2C3237",950:"#212529"},
      success:"#198754", warning:"#FFC107", critical:"#DC3545",
    },
    borderRadius:{ btn:"6px", card:"8px", input:"6px" },
    fontFamily:{ sans:["system-ui","-apple-system","Segoe UI","Roboto","Helvetica Neue","Arial","sans-serif"] },
  }}
}

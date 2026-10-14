// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#E7F5FF",100:"#C7E7FF",200:"#91CEFE",300:"#5DB3F9",400:"#389DF1",500:"#228BE6",600:"#1D81D9",700:"#1A76CA",800:"#196CB9",900:"#155794",950:"#082138"},
      gray:{50:"#F8F9FA",100:"#EFF2F4",200:"#E5E8EB",300:"#D4DADF",400:"#B4BBC3",500:"#868E96",600:"#616970",700:"#454C52",800:"#383E45",900:"#2C3237",950:"#212529"},
      success:"#40C057", warning:"#FAB005", critical:"#FA5252",
    },
    borderRadius:{ btn:"4px", card:"8px", input:"4px" },
    fontFamily:{ sans:["-apple-system","system-ui","Segoe UI","Roboto","sans-serif"] },
  }}
}

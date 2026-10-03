// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#E6F4FF",100:"#BAE0FF",200:"#91CAFF",300:"#69B1FF",400:"#4096FF",500:"#1677FF",600:"#0958D9",700:"#003EB3",800:"#002C8C",900:"#001D66",950:"#001140"},
      gray:{50:"#FAFAFA",100:"#F5F5F5",200:"#F0F0F0",300:"#D9D9D9",400:"#BFBFBF",500:"#8C8C8C",600:"#595959",700:"#434343",800:"#262626",900:"#1F1F1F",950:"#141414"},
      success:"#52C41A", warning:"#FAAD14", critical:"#F5222D",
    },
    borderRadius:{ btn:"6px", card:"8px", input:"6px" },
    fontFamily:{ sans:["-apple-system","Segoe UI","Roboto","system-ui","sans-serif"] },
  }}
}

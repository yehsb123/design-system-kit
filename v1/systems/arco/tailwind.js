// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#E8F3FF",100:"#BEDAFF",200:"#94BFFF",300:"#6AA1FF",400:"#4080FF",500:"#165DFF",600:"#1047DB",700:"#0A35B8",800:"#052594",900:"#021770",950:"#000D4D"},
      gray:{50:"#F7F8FA",100:"#F2F3F5",200:"#E5E6EB",300:"#C9CDD4",400:"#A9AEB8",500:"#86909C",600:"#707C8A",700:"#5A6574",800:"#3E4857",900:"#252B37",950:"#1D2129"},
      success:"#00B42A", warning:"#FF7D00", critical:"#F53F3F",
    },
    borderRadius:{ btn:"2px", card:"4px", input:"2px" },
    fontFamily:{ sans:["Inter","PingFang SC","Microsoft YaHei","system-ui","sans-serif"] },
  }}
}

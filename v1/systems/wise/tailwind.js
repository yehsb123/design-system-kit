// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#F4FDEE",100:"#E2F6D5",200:"#CBF0B3",300:"#B5EB91",400:"#9FE870",500:"#9FE870",600:"#7BC94E",700:"#4F9B2C",800:"#2E6B18",900:"#1B4310",950:"#163300"},
      gray:{50:"#F7F8F6",100:"#E8EBE6",200:"#D5D8D3",300:"#B3B5B2",400:"#868685",500:"#6A6C6A",600:"#545654",700:"#454745",800:"#2C2E2B",900:"#0E0F0C",950:"#080906"},
      success:"#054D28", warning:"#E8A600", critical:"#CB272F",
    },
    borderRadius:{ btn:"9999px", card:"10px", input:"10px" },
    fontFamily:{ sans:["Inter","Pretendard","-apple-system","system-ui","sans-serif"] },
  }}
}

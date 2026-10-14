// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#FBFDFF",100:"#ECF6FE",200:"#D1EDFF",300:"#B0DBFD",400:"#7BBFF3",500:"#0090FF",600:"#038BF6",700:"#0784E9",800:"#0B78D5",900:"#0F5AA4",950:"#113264"},
      gray:{50:"#FCFCFD",100:"#F4F4F6",200:"#E6E7EB",300:"#DADBE1",400:"#C5C6D0",500:"#8B8D98",600:"#848791",700:"#7A7D86",800:"#666A73",900:"#45494F",950:"#1C2024"},
      success:"#30A46C", warning:"#FFC53D", critical:"#E5484D",
    },
    borderRadius:{ btn:"6px", card:"12px", input:"6px" },
    fontFamily:{ sans:["Inter","system-ui","-apple-system","sans-serif"] },
  }}
}

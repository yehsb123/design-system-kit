// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#EEF3FF",100:"#E5EDFF",200:"#CBD9FF",300:"#A3BCFF",400:"#7396FF",500:"#4178FF",600:"#2E5FE6",700:"#244BC0",800:"#1F3E9C",900:"#1E387D",950:"#16244D"},
      gray:{50:"#F9FAFB",100:"#F2F3F5",200:"#E5E7EC",300:"#D2D5DC",400:"#A8A9B0",500:"#7C7E86",600:"#5C5C62",700:"#43444A",800:"#2C2C30",900:"#212124",950:"#0C0C0D"},
      success:"#00C24F", warning:"#F59E0B", critical:"#F72424",
    },
    borderRadius:{ btn:"8px", card:"12px", input:"8px" },
    fontFamily:{ sans:["Pretendard","-apple-system","system-ui","sans-serif"] },
  }}
}

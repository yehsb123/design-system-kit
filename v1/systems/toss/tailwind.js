// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#E8F3FF",100:"#C9E2FF",200:"#90C2FF",300:"#64A8FF",400:"#4593FC",500:"#3182F6",600:"#2272EB",700:"#1B64DA",800:"#1957C2",900:"#194AA6",950:"#123A82"},
      gray:{50:"#F9FAFB",100:"#F2F4F6",200:"#E5E8EB",300:"#D1D6DB",400:"#B0B8C1",500:"#8B95A1",600:"#6B7684",700:"#4E5968",800:"#333D4B",900:"#191F28",950:"#0F131A"},
      success:"#03B26C", warning:"#FE9800", critical:"#F04452",
    },
    borderRadius:{ btn:"10px", card:"16px", input:"10px" },
    fontFamily:{ sans:["Pretendard","Toss Product Sans","-apple-system","system-ui","sans-serif"] },
  }}
}

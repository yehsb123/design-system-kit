// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#FFF0FA",100:"#FFDDF4",200:"#FFB8E8",300:"#FF85D6",400:"#FF4FC0",500:"#F72AAA",600:"#DB1690",700:"#B00F72",800:"#820A54",900:"#550636",950:"#2E031C"},
      gray:{50:"#FAF8FF",100:"#F1EDFB",200:"#E2DAF3",300:"#C7BCE3",400:"#A493C9",500:"#7E6BA8",600:"#5E4E83",700:"#443A5F",800:"#2C2640",900:"#1A1626",950:"#0D0B13"},
      success:"#17C964", warning:"#F5A524", critical:"#F31260",
    },
    borderRadius:{ btn:"999px", card:"22px", input:"14px" },
    fontFamily:{ sans:["Poppins","Pretendard","system-ui","sans-serif"] },
  }}
}

// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#EEF1FE",100:"#DCE2FD",200:"#BCC6FB",300:"#93A4F6",400:"#6B82F2",500:"#415EEE",600:"#2E48D4",700:"#2439A8",800:"#1B2B7E",900:"#141F5B",950:"#0A1033"},
      gray:{50:"#F7F9FC",100:"#EBF0F8",200:"#DDE3EC",300:"#C3CAD5",400:"#9BA2AD",500:"#747679",600:"#5A5C60",700:"#45474B",800:"#2F3135",900:"#222326",950:"#1F2025"},
      success:"#31CE01", warning:"#FFCA00", critical:"#F2674A",
    },
    borderRadius:{ btn:"128px", card:"28px", input:"16px" },
    fontFamily:{ sans:["Plus Jakarta Sans","Pretendard","-apple-system","system-ui","sans-serif"] },
  }}
}

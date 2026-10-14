// tailwind.config.js
export default {
  theme:{ extend:{
    colors:{
      primary:{50:"#EBF5FE",100:"#DBECFC",200:"#BADCFE",300:"#7DBEFF",400:"#3597F9",500:"#0875E1",600:"#0366C9",700:"#0057AF",800:"#004891",900:"#00356B",950:"#002040"},
      gray:{50:"#F6F7F8",100:"#EAECEE",200:"#D5D9DE",300:"#AFB7BF",400:"#75808A",500:"#4A5561",600:"#414B57",700:"#38424C",800:"#2F3842",900:"#272F38",950:"#1F262E"},
      success:"#43C463", warning:"#FFA126", critical:"#FF5347",
    },
    borderRadius:{ btn:"999px", card:"4px", input:"4px" },
    fontFamily:{ sans:["Roboto","Noto Sans","-apple-system","system-ui","sans-serif"] },
  }}
}

import {
  binaryv115, binaryh115, hex115, ing115, eng115,
  ///////////
  bangla115, gurmukhi115,  hindi115, malayalam115,  tamil115,
  guzrati115, kannada115,  oriya115, telugu115,
  korean115,   sinhala115,
  ///////////
  bangla15, guzrati15, kannada15, malayalam15, sinhala15, telugu15,
  gurmukhi15, hindi15, korean15, oriya15, tamil15,  
  ///////////
  bangla25, guzrati25, kannada25, malayalam25, sinhala25, telugu25,
  gurmukhi25, hindi25, korean25, oriya25, tamil25,  
  ///////////
  lbangla15, lhindi15, lmalayalam15, ltamil15,
  lgurmukhi15, lkannada15, loriya15, ltelugu15,
  lguzrati15, lkorean15, lsinhala15,  
  ///////////
  ubangla25, uhindi25, umalayalam25, utamil25,
  ugurmukhi25, ukannada25, uoriya25, utelugu25,
  uguzrati25, ukorean25, usinhala25
} from "./localfonts";

const FontPicker: React.FC = () => {
  const handlevaluechange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    document.body.className = "";
    const v_to_f = (sval: string): string => {
      switch (sval) {
        case "0": return ing115.className;
        case "1": return hindi15.className;
        case "2": return bangla15.className;
        case "3": return korean15.className;
        case "4": return sinhala15.className;
        case "5": return tamil15.className;
        case "6": return telugu15.className;
        case "7": return kannada15.className;
        case "8": return malayalam15.className;
        case "9": return oriya15.className;
        case "Y": return guzrati15.className;
        case "J": return gurmukhi15.className;
        case "Q": return binaryv115.className;
        case "W": return lhindi15.className;
        case "P": return uhindi25.className;
        case "F": return hindi25.className;
        case "10": return eng115.className;
        default: return hindi15.className;
      }
    };
    const sf = v_to_f(e.target.value);
    document.body.classList.add(sf);
    document.body.classList.add("antialiased");
  };
  return (
    <select
      onChange={handlevaluechange}
      className="select text-zinc-50 italic font-bold bg-black mx-4 w-1/4"
    >
      <option value="0">0_iNg115(31):a-z+ADHTN</option>
      <option value="1">1_Hindi15</option>
      <option value="2">2_bANglA15</option>
      <option value="3">3_korean15</option>
      <option value="4">4_sinHalA15</option>
      <option value="5">4_Tamil15</option>
      <option value="6">6_Telugu15</option>
      <option value="7">7_kannadA15</option>
      <option value="8">8_malayAlam15</option>
      <option value="9">9_oriya15</option>
      <option value="Y">Y_guzrATi15</option>
      <option value="J">J_gurmukhi15</option>
      <option value="Q">Q_binaryv115(89YJQWPF 10=vnti=4*4)</option>
      <option value="W">W_lHinDi15</option>
      <option value="P">P_uHinDi15</option>
      <option value="F">F_HinDi25</option>
      <option value="10">10_eng115</option>
    </select>
  );
};
export default FontPicker;

/*
 * https://learnkorean.in/learn-korean-script-hangeul-for-indian-learners/ (good hindi korean video)
 * youtube.com/shorts/OaN-v8F6oy0
 * https://www.busuu.com/en/korean/pronunciation
 * ㅌㄸㅍㅂㅅㅑㄹlㅁㄴfԃ=tdpbsyrlmnfD
 * five double consonants: ㄲ, ㄸ, ㅃ, ㅆ and ㅉ
 * t	ㅌ
 * d	ㄸ
 * p	ㅍ
 * bpf	ㅂ
 * s/t	ㅅ
 * y	ㅑ
// r/l	ㄹ
// m	ㅁ	good
// n	ㄴ	good
// bpf	ㅂ

//ㄷ	d/t
//ㄱ	g/k
//ㅋ	k
//

//ㅇ	ng
//ㅈ	j/ch
//ㅊ	ch(/t)



//ㅎ	h

// ㅌ다ㅍ바ㅅy라lㅁㄴfԃ  
as per https://www.busuu.com/en/korean/pronunciation
Consonant	Pronunciation		Consonant	Pronunciation
ㄱ			[g] or [k]				ㅇ			[-]
ㄴ				[n]					ㅈ		[j] or [ch]
ㄷ			[d] or [t]				ㅊ			[ch]
ㄹ			[r] or [l]				ㅋ			[k]
ㅁ				[m]					ㅌ			[t]
ㅂ			[b]or[p]				ㅍ			[p]
ㅅ				[s]					ㅎ			[h]

////////georgian
////// https://www.mondly.com/blog/hangul-korean-alphabet-pronunciation/ ////////
////////////////////////
// 19 conso ㄱ, ㄲ, ㄴ, ㄷ, ㄸ, ㄹ, ㅁ, ㅂ, ㅃ, ㅅ, ㅆ, ㅇ, ㅈ, ㅉ, ㅊ, ㅋ, ㅌ, ㅍ, ㅎ
ㅌ	티읕	tieut
ㄸ	디귿	digeut ㄸ ㄷ	쌍디귿	ssangdigeut
// The Hangul syllable for the sound "d" as in "dog" is ㄸ, which is pronounced 쌍디귿 (ssang digeut). ㄸ is a strong "d" sound, similar to "dog" or "day".
ㅍ	피읖	pieup
ㅂ	비읍	bieup ㅃ	쌍비읍	ssangbieup
ㅅ	시옷	siot ㅆ	쌍시옷	ssangsiot ㅉ	쌍지읒	ssangjieut
ㅑ	ya ㅒ	yae ㅕ	yeo ㅖ	ye ㅛ	yo ㅠ	yu
ㄹ	리을	rieul
l	을
// if ㄹ is used at the beginning of a word or as a final consonant, then ㄹ is pronounced as an 'L' sound
ㅁ	미음	mieum
ㄴ	니은	nieun
f
ㄲ	쌍기역	ssangiyeok ,
ㄱ	기역	giyeok
ㅊ	치읓	chieut
ㅋ	키읔	kieuk
/////////giscus font style
.markdown .g-emoji {
  //font-family: "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 400;
}
.markdown .footnotes .data-footnote-backref .g-emoji {
  //font-family: monospace;
}
const list = document.getElementsByClassName("markdown");
for (var i = 0; i < list.length; ++i) {
  list[i].style.fontFamily = "ing115_font";
}
*/

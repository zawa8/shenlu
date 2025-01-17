import {
    binaryv115, binaryh115, hex115, ing115, eng115,
    korean115, korean15, korean25, lkorean15, ukorean25, 
    hindi115, hindi15, hindi25, lhindi15, uhindi25, 
    bangla115, bangla15, bangla25, lbangla15, ubangla25, 
    sinhala115, sinhala15, sinhala25, lsinhala15, usinhala25, 
    tamil115, tamil15, tamil25, ltamil15, utamil25, 
    kannada115, kannada15, kannada25, lkannada15, ukannada25, 
    malayalam115, malayalam15, malayalam25, lmalayalam15, umalayalam25, 
    telugu115, telugu15, telugu25, ltelugu15, utelugu25, 
    oriya115, oriya15, oriya25, loriya15, uoriya25, 
    gurmukhi115, gurmukhi15, gurmukhi25, lgurmukhi15, ugurmukhi25, 
    guzrati115, guzrati15, guzrati25, lguzrati15, uguzrati25
} from "./localfonts";

export const v_to_f = (sval: string): string => {
    switch (sval) {
      case "ing115": return ing115.className;
      case "eng115": return eng115.className;
      case "binaryh115": return binaryh115.className;
      case "binaryv115": return binaryv115.className;
      case "hex115": return hex115.className;

      // hindi115, hindi15, hindi25, lhindi15, uhindi25
      case "hindi115": return hindi115.className;
      case "hindi15": return hindi15.className;
      case "hindi25": return hindi25.className;
      case "lhindi15": return lhindi15.className;
      case "uhindi25": return uhindi25.className;

      // bangla115, bangla15, bangla25, lbangla15, ubangla25, 
      case "bangla115": return bangla115.className;
      case "bangla15": return bangla15.className;
      case "bangla25": return bangla25.className;
      case "lbangla15": return lbangla15.className;
      case "ubangla25": return ubangla25.className;

      // korean115, korean15, korean25, lkorean15, ukorean25,       
      case "korean115": return korean115.className;
      case "korean15": return korean15.className;
      case "korean25": return korean25.className;
      case "lkorean15": return lkorean15.className;
      case "ukorean25": return ukorean25.className;

      // sinhala115, sinhala15, sinhala25, lsinhala15, usinhala25,      
      case "sinhala115": return sinhala115.className;
      case "sinhala15": return sinhala15.className;
      case "sinhala25": return sinhala25.className;
      case "lsinhala15": return lsinhala15.className;
      case "usinhala15": return usinhala25.className;

      // tamil115, tamil15, tamil25, ltamil15, utamil25, 
      case "tamil115": return tamil115.className;
      case "tamil15": return tamil15.className;
      case "tamil25": return tamil25.className;
      case "ltamil15": return ltamil15.className;
      case "utamil25": return utamil25.className;

      // kannada115, kannada15, kannada25, lkannada15, ukannada25, 
      case "kannada115": return kannada115.className;
      case "kannada15": return kannada15.className;
      case "kannada25": return kannada25.className;
      case "lkannada15": return lkannada15.className;
      case "ukannada25": return ukannada25.className;

      // malayalam115, malayalam15, malayalam25, lmalayalam15, umalayalam25, 
      case "malayalam115": return malayalam115.className;
      case "malayalam15": return malayalam15.className;
      case "malayalam25": return malayalam25.className;
      case "lmalayalam15": return lmalayalam15.className;
      case "umalayalam25": return umalayalam25.className;

      // telugu115, telugu15, telugu25, ltelugu15, utelugu25, 
      case "telugu115": return telugu115.className;
      case "telugu15": return telugu15.className;
      case "telugu25": return telugu25.className;
      case "ltelugu15": return ltelugu15.className;
      case "utelugu25": return utelugu25.className;

      // oriya115, oriya15, oriya25, loriya15, uoriya25, 
      case "oriya115": return oriya115.className;
      case "oriya15": return oriya15.className;
      case "oriya25": return oriya25.className;
      case "loriya15": return loriya15.className;
      case "uoriya25": return uoriya25.className;

      // gurmukhi115, gurmukhi15, gurmukhi25, lgurmukhi15, ugurmukhi25, 
      case "gurmukhi115": return gurmukhi115.className;
      case "gurmukhi15": return gurmukhi15.className;
      case "gurmukhi25": return gurmukhi25.className;
      case "lgurmukhi15": return lgurmukhi15.className;
      case "ugurmukhi25": return ugurmukhi25.className;

      // guzrati115, guzrati15, guzrati25, lguzrati15, uguzrati25      
      case "guzrati115": return guzrati115.className;
      case "guzrati15": return guzrati15.className;
      case "guzrati25": return guzrati25.className;
      case "lguzrati15": return lguzrati15.className;
      case "uguzrati25": return uguzrati25.className;

      default: return hindi15.className;
    }
};
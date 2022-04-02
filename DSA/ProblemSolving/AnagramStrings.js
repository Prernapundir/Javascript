// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
// Input: s = "anagram", t = "nagaram"
// Output: true


var isAnagram = function(s, t) {
    let freqCounter1={}
    
    let n1=s.length,n2=t.length;
    
    if(n1!=n2) return false;
    
    for(let val of s) {
      freqCounter1[val]=(freqCounter1[val]||0) +1;
    }
    
    for(let val of t ){
        if(!freqCounter1[val]){
            return false;
        }
        freqCounter1[val]--;
    }
    
    return true;
};

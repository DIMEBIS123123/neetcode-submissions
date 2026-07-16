class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        if(s.length != t.length){
            return false
        }
        const charCount = new Map<string,number>();

        for (const char of s){
            charCount.set(char,(charCount.get(char) || 0) + 1 )
        }
        for (const char of t){
            if(!charCount.has(char) || charCount.get(char) == 0){
                return false
            }
            charCount.set(char,charCount.get(char) - 1)
            
        }
        return true
    }
}

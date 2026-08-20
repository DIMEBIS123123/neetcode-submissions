class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0
        let right = s.length - 1

        while(left<right){

            const leftChar = s[left].toLowerCase()
            const rightChar = s[right].toLowerCase()
            const isAlphaNum = (char: string) => /^[a-z0-9]$/.test(char);
            if(!isAlphaNum(leftChar)){
                left++;
                continue;
            }
            if(!isAlphaNum(rightChar)){
                right--;
                continue;
            }
            if(leftChar !== rightChar){
                return false
            }
            else{
                left++;
                right--;
            }
        }
        return true
    }
}

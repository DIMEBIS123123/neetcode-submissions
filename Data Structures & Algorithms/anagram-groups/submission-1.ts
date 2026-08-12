class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map<string,string[]>()
        for(let i = 0; i<strs.length;i++){
            const sortedName = strs[i].split('').sort().join('');
            if(map.has(sortedName)){
               map.set(sortedName,[...map.get(sortedName),strs[i]])
            }
            else{
                map.set(sortedName,[strs[i]])
            }
            
        }
     return [...map.values()]
        
    }
    
}

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
        const storage = new Map<number,number>()

        for(let i = 0; i < nums.length;i++){
          if(storage.has(nums[i])){
            storage.set(nums[i], storage.get(nums[i]) + 1)
          }
          else{
            storage.set(nums[i],1)
          }
        }
        
        return Array.from(storage).sort((a,b) => b[1] - a[1]).slice(0,k).map((p) => p[0])
        
    }
}

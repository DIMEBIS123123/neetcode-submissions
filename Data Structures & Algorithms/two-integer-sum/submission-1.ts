class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map<number,number>()

        for(let i =0;i<nums.length;i++){
            const current = nums[i];
            const lookingFor = target - nums[i];
            if(map.has(lookingFor)){
                return [map.get(lookingFor),i]
            } else{
                map.set(current,i);
            }
               
        }
        return []
    }
}

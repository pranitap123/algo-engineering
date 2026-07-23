function twoSum(nums: number[], target: number): number[] {
    const seen = new Map<number, number> ()
    for(let i =0; i< nums.length; i++){
        const current = nums[i];
        const needed = target - current;
        if(seen.has(needed)){
            return [seen.get(needed)!, i];
        }
        seen.set(current,i);
    }
    return [];
}
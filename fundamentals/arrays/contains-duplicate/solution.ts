function findDuplicate(nums: number[]): boolean {

    const seen: Set<number> = new Set<number>();

    for(let i = 0; i < nums.length; i++){

        if(seen.has(nums[i])){
            return true;
        }

        seen.add(nums[i]);
    }

    return false;
}
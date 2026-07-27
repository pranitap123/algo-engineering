function topKFrequent(nums: number[], k:number):number[]{

    const map = new Map<number, number>();

    for(const num of nums){
        if(map.has(num)){
            map.set(num, map.get(num)! +1);
        } else{
           map.set(num,1);
        }
    } 
    const arr = Array.from(map.entries());

    arr.sort((a, b) => b[1] - a[1]);

    const top = arr.slice(0, k);

    return top.map((item) => item[0]);
}
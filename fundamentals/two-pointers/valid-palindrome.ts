function validParanthesis(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while(left < right){
        if(!/[a-z0-9]/i.test(s[left])){
            left++;
            continue;
        }
        else if(!/[a-z0-9]/i.test(s[right])){
            right--;
            continue;
        }
        
          let left_lower =  s[left].toLowerCase();
          let right_lower = s[right].toLowerCase();

        if(left_lower !== right_lower){
             return false;
        }
        
        left++;
        right--;
    }
    return true;
}

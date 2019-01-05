function search(a,left,right,x){
    const mid = (left + right) / 2;

    if(x === a[mid]){
        return mid;
    }

    if(right < left){
        return -1;
    }


    /**
     * Either the left or the side right must be properly sorted. Find out which
     * side is normally ordered, and then use the normally ordered half to figure out
     * which side to search to find x
     */
    if(a[left] < a[mid]){//if left side is ordered
        if(x < a[mid] && x >= a[left]){
            return search(a,left,mid-1,x)
        }else{
            return search(a,mid+1,right,x);
        }
    }else if(a[mid] < a[right]){//right is normally ordered
        if (x > a[mid] && x <= a[right]) {
            return search(a,mid+1, right, x)
        } else {
            return search(a, left, mid - 1, x);
        }
    }else if(a[left] === a[mid]){//Left or right is half repeated
        if(a[mid] !== a[right]){
            return search(a,mid+1, right, x);//search right;
        }else{// Else, we have to search both sides.
            const result = search(a, left , mid-1,x);
            if(result === -1){
                return search(a,mid+1, right,x);
            }
            return result;
        }
    }

    return -1;
}
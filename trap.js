var trap = function(height) {
    let capacity=[];
    for (var i = 0; i < height.length - 1; i++) {
        let counter = i + 1;
        let check=false;
        while (height[i] > height[counter]) {
            if(height[counter]<height[counter+1]) check=true;
            counter++;
        }
        if(counter==height.length) continue;

        if (counter - i > 1) {
            let low = i+1;
            let water = 0;
            let scale = Math.min(...[height[i],height[counter]]);
            while (low < counter) {
                water += scale-height[low];
                low++;
            }
            i = counter-1;
            capacity.push(water);
        }
    }
    return capacity.reduce((a,b)=>a+b,0);
};

console.log(trap([5,2,3, 4])); //1
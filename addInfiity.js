function AddInfinity(a, b) {
    a = String(a).split("");
    b = String(b).split("");

    a = a.reverse();
    b = b.reverse();
    let hasil = 0, unitPlace; result = "";
    
    a.forEach((element, index) => {
        let temp = new Number(element) + new Number(b[index]) + Number(hasil);
        hasil='0';
        if (String(temp).length > 1) {
            hasil = String(temp).split("")[0];
            unitPlace = String(temp).split("")[1];

        }
        else {
            unitPlace = String(temp).split("")[0];
        }

        result += unitPlace;

    });
    if (hasil > 0) {
        result = String(hasil) + String(result).split("").reverse().join("");
    }
    else {
        result = String(result).split("").reverse().join("");
    }

    

    return result.replace(/^0+/, '');;
}

console.log(AddInfinity(100000000000,10000000000000000))
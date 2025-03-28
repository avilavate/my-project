async function sleep(millis) {
    return new Promise(
        fn=>{
            setTimeout(() => {
               // console.log(millis)
                fn(millis);
            }, millis);
        }
    )
}

sleep(1000).then(()=>console.log("Hi"));
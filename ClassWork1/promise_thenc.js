function payment(pay) {
    return new Promise((resolve, reject) => {
        if (pay) {
            resolve("Successfull")
        } else {
            reject("error")
        }
    });
}

payment(true).then((result) => {
    console.log(result)
})
    .catch((err) => {
        console.log(err);

    })
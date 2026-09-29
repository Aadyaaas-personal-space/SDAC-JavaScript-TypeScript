function payment(pay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (pay) {
                resolve("Success")
            } else {
                reject("Error")
            }
        }, 3000)
    })
}

async function test() {
    try {
        const result = await payment()
        console.log(result);

    } catch (error) {
        console.log(error);

    }
}
test()
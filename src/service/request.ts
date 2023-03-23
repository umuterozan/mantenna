function request(url: string, data: any = false, method = "GET") {
    return new Promise(async (resolve, reject) => {
        const options: any = {
            method,
            headers: {
                "Content-Type": "application/json",
            },
        }

        if (data && method === "POST") {
            options.body = JSON.stringify(data)
        }

        const response = await fetch(url, options)
        const result = response.json()

        if (response.ok) {
            resolve(result)
        } else {
            reject(result)
        }
    })
}

export const post = (url: string, data: any) => request(url, data, "POST")
export const get = (url: string) => request(url)
import {to} from "$lib/utils.ts";

export type Fetcher = typeof fetch

export async function request(
    path: string,
    method: string,
    inputBody: string | null,
    params: string[],
    fetcher?: Fetcher
) {
    const url = "http://localhost:8080" + path + params.join('/')

    const options: RequestInit = {
        method,
        headers: {
            'Content-Type': 'application/json',
        },
    }

    if (inputBody !== null) {
        options.body = inputBody
    }

    const [err, res] = await to((fetcher ?? fetch)(url, options))

    if (err || !res?.ok) return null
    return await res.json()
}
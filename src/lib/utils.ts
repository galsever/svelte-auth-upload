type AsyncResult<T> = [Error | null, T | null]

export async function to<T>(promise: Promise<T>): Promise<AsyncResult<T>> {
    try {
        const data = await promise
        return [null, data]
    } catch (err) {
        return [err as Error, null]
    }
}
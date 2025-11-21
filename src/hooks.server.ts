import type {Handle} from "@sveltejs/kit";

export const handle: Handle = async ({event, resolve}) => {
    const res = await event.fetch("http://localhost:8080/auth/me")
    if (!res.ok) {
        event.locals.user = null
    } else {
        event.locals.user = await res.json()
    }

    return resolve(event)
}
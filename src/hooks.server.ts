import type {Handle} from "@sveltejs/kit";
import {currentUser} from "$lib/api/routes.ts";

export const handle: Handle = async ({event, resolve}) => {
    event.locals.user = await currentUser(event.fetch)
    return resolve(event)
}
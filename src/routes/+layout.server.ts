import type {LayoutServerLoad} from "./$types";
import {redirect} from "@sveltejs/kit";

export const load: LayoutServerLoad = async ({ locals, url }) => {

    const user = locals.user;

    if (url.pathname.startsWith("/login") && !user) {
        return
    }


    if (!user) {
        throw redirect(303, "/login")
    }

    if (url.pathname.startsWith("/login")) {
        throw redirect(303, "/")
    }

    return {
        user
    }
}
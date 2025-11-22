import type {PageServerLoad} from "../../../.svelte-kit/types/src/routes/profile/[user]/$types";
import {redirect} from "@sveltejs/kit";

export const load: PageServerLoad = async (event) => {
    const user = event.locals.user;
    if (!user) {
        throw redirect(303, "/login")
    }
    throw redirect(303, `/profile/${user.username}`)
}
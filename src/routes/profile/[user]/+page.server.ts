import type { PageServerLoad } from "./$types"
import {getUser} from "$lib/api/routes.ts";

export const load: PageServerLoad = async (event) => {
    const username = event.params.user
    const user = await getUser(username, event.fetch)
    return { user }
}
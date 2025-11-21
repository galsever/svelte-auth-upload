import type { PageServerLoad } from "./$types"
import type {User} from "$lib/definitions.ts";

export const load: PageServerLoad = async (event) => {
    const username = event.params.user
    const response = await event.fetch(`http://localhost:8080/user/${username}`)

    console.log(response)

    let user: User | null = null
    if (response.ok) {
        user = await response.json()
    }

    return { user }
}
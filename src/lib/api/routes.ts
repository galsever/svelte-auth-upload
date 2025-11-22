import type { BucketObject, Post, PostCreateRequest, PostCreateResponse, PostFinishRequest, PresignedURLRequest, User } from "$lib/api/definitions.ts"
import { request } from "./request"
import type { Fetcher } from "./request"

export async function currentUser(fetcher?: Fetcher): Promise<User | null> {
    const res = await request(
        "/auth/me",
        "GET",
        null,
        [],
        fetcher,
    );
    return res as User | null;
}

export async function createPost(postCreateRequest: PostCreateRequest, fetcher?: Fetcher): Promise<PostCreateResponse | null> {
    const res = await request(
        "/posts",
        "POST",
        JSON.stringify(postCreateRequest),
        [],
        fetcher,
    );
    return res as PostCreateResponse | null;
}

export async function finishPost(postFinishRequest: PostFinishRequest, fetcher?: Fetcher): Promise<Post | null> {
    const res = await request(
        "/posts/finish",
        "POST",
        JSON.stringify(postFinishRequest),
        [],
        fetcher,
    );
    return res as Post | null;
}

export async function getUser(name: string, fetcher?: Fetcher): Promise<User | null> {
    const res = await request(
        "/user/",
        "GET",
        null,
        [name],
        fetcher,
    );
    return res as User | null;
}


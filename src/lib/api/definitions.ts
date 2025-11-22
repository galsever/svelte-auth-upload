export interface User {
    avatar: string;
    email: string;
    global_name: string;
    id: string;
    username: string;
}


export interface PresignedURLRequest {
    contentType: string;
    size: number;
}


export interface PostCreateRequest {
    content: string;
    uploadRequest: PresignedURLRequest;
}


export interface PostCreateResponse {
    id: string;
    url: string;
}


export interface BucketObject {
    bucket: string;
    key: string;
}


export interface PostFinishRequest {
    id: string;
}


export interface Post {
    bucketObject: BucketObject;
    content: string;
    id: string;
    owner: string;
}



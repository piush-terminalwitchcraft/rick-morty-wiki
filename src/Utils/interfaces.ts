export interface CharacterSearchQuery {
    name?: string | undefined;
    status?: "alive" | "dead" | "unknown",
    species?: string | undefined,
    type?: string,
    gender?: "female" | "male" | "genderless" | "unknown",
    page?: string,
    [key: string]: string | undefined
}

export type CharacterSearchQueryActions = 
| { type: "SET_PAGE"; payload: string | undefined }
| { type: "SET_STATUS"; payload: "alive" | "dead" | "unknown" | undefined }
| { type: "SET_GENDER"; payload: "female" | "male" | "genderless" | "unknown" | undefined }
| { type: "SET_NAME"; payload: string | undefined };

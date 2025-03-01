export type ExerciseProps =  {
    id: string;
    type: string;
    points: number;
    content: string;
    createdAt: Date;
    finishedAt: Date;
    user?: UserProps;
}

export type UserProps =  {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
    updatedAt: Date;
    image?: string;
    exercises?: ExerciseProps[];
    avg?: number | null;
}

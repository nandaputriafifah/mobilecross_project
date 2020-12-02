// export interface User {
//     user_id: string;
//     email: string;
//     name: string;
//     username: string;
//     emailVerified: boolean;
//     photo_profile: string;
//     user_point: number;
//     achivement: string;
//     total_correct_answer: number;
// }

export class User{
    user_id: string;
    emails: string;
    names: string;
    usernames: string;
    emailVerified: boolean;
    points: {
    quiz_id: string;
    user_point: number;
    user_score: number;
    }
    photo_profile: string;
    achivement: string;

    constructor(
        user_id: string,
        emails: string,
        names: string,
        usernames: string,
        emailVerified: boolean,
        points: {
        quiz_id: string,
        user_point: number,
        user_score: number,
        },
        photo_profile: string,
        achivement: string) {
    }
}

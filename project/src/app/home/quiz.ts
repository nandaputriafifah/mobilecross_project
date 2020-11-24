export class Quiz {
    quiz_id: string;
    quiz_image: string;
    question: string;
    choice1: string;
    choice2: string;
    choice3: string;
    choice4: string;
    answer: string;
    answer_description: string;

    constructor(
        quiz_id: string,
        quiz_image: string,
        question: string,
        choice1: string,
        choice2: string,
        choice3: string,
        choice4: string,
        answer: string,
        answer_description: string) {
    }
}

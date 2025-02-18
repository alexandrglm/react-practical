export type  Question = {
    question: string;
    answer: string;
    value: number;
    isCorrect: boolean;
};

abstract class Exercise {
    public exerciseType: string;
    public questions: Question[];
    protected value: number;

    constructor (exerciseType: string, value: number, length: number) {
        this.exerciseType = exerciseType;
        this.questions = Array(length);
        this.value = value;
        this.generate();
    }

    generate () { }

    isAnswerCorrect (index: number, answer: string) {
        return this.questions[index].answer == answer.trim().toLowerCase();
    }

    correctAnswer (index: number, answer: string) {
        if (this.isAnswerCorrect(index, answer)) 
            this.questions[index].isCorrect = true;
    }

    get points (): number {
        return this.questions
            .filter(question => question.isCorrect)
            .reduce((acc, current) => current.value + acc, 0)
    }

    protected random (max: number, min: number = 0): number {
        return Math.floor(Math.random() * (Math.floor(max) - Math.ceil(min) + 1)) + Math.ceil(min);
    }

    protected randomElement (element: any[]): any {
        return element[this.random(element.length - 1)];
    }
}

export class Magnitudes extends Exercise {
    constructor (value: number, length: number = 10) {
        super("Magnitudes", value, length)
    }

    generate () {
        for (let i = 0;i<this.questions.length;i++) {
            const exercise = this.generateQuestion()
            this.questions[i] = {...exercise, value: this.value, isCorrect: false}
        }
    }

    generateQuestion (): any {
        const magnitudes: string[][]= [
            ['mm', 'cm', 'dm', 'm', 'dam', 'hm', 'Km'],
            ['ml', 'cl', 'dl', 'l', 'dal', 'hl', 'Kl'],
            ['mg', 'cg', 'dg', 'g', 'dag', 'hg', 'Kg'],
        ]
        const types: string [] = ["metro", "litro", "gramo"];
        const selectedType = this.random(2);
        const selectedIndex = this.random(magnitudes[selectedType].length - 1);
        const value = this.random(1, 100) * this.randomElement([1, 10, 100, 1000])
        const requestedIndex = this.random(magnitudes[selectedType].length - 1)
        const question =  value + magnitudes[selectedType][selectedIndex] + " = " + magnitudes[selectedType][requestedIndex];
        
        const answer = Math.pow(10, selectedIndex) * value / Math.pow(10, requestedIndex)

        return {
            question,
            answer,
        }
    }
}

export class Times extends Exercise {
    constructor (value: number, length: number = 10) {
        super("Times", value, length)
    }

    generate () {
        for (let i = 0;i<this.questions.length;i++) {
            const exercise = this.generateQuestion()
            this.questions[i] = {...exercise, value: this.value, isCorrect: false}
        }
    }

    generateQuestion (): any {
        const choice = this.random(0, 10)
        return  choice > 5 ? this.generateSecondsExercise() : this.generateMinutesExercise();
    }

    generateSecondsExercise () {
        const seconds = this.random(1000, 50000) 
        const answer = (new Date(seconds * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)![0];

        return {
            question: `${seconds} sec. = hh:mm:ss`,
            answer,
        }
    }

    generateMinutesExercise () {
        const minutes = this.random(10, 500) 
        const answer = (new Date((minutes * 60) * 1000)).toUTCString().match(/(\d\d:\d\d:\d\d)/)![0];
        // (requestedIndex > 0 ? (requestedIndex * 10) : 1)
        return {
            question: `${minutes} min. = hh:mm:ss`,
            answer,
        }
    }
}

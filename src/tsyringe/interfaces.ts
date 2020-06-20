import { injectable, injectAll, registry } from 'tsyringe'

interface Question {
    answer: (answer: string) => boolean
}

export class TrueOrFalseQuestion implements Question {
    answer(answer: string): boolean {
        console.log(`Answering with ${answer}`)
        return true
    }
}

/**
 * Here we need to explicitly annotate the Question interface
 * parameter to at compile time we have info about it.
 *
 * Furthermore, we could have somewhere said:
 * container.register('Question', TrueOrFalseQuestion)
 *
 * but instead we put that here in the registry annotation
 */
@injectable()
@registry([{ token: 'Question', useClass: TrueOrFalseQuestion }])
export class Evaluation {
    constructor(@injectAll('Question') private questions?: Question[]) {}

    evaluate(): void {
        this.questions.forEach((question) => {
            question.answer('42!')
        })
    }
}

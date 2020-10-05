import ILetter from './anLetter';

export default interface ISecret {
    letters: Array<ILetter>;
    hint: string;
    word: string
}

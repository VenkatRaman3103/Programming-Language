import { identifyCharacter } from '../../src/language/identifyCharacter';

describe(identifyCharacter, () => {
    it('should identify the type of the single character', () => {
        const input = 'a';

        expect(identifyCharacter(input)).toBe('character');
    });

    it('should identify the type of the single number', () => {
        const input = 1;

        expect(identifyCharacter(input)).toBe('number');
    });

    it('should identify the operators', () => {
        const input = ['*', '-', '+', '%'];

        for (let i = 0; i < input.length; i++) {
            const key = input[i];

            expect(identifyCharacter(key)).toBe('operator');
        }
    });
});

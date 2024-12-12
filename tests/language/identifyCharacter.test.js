import { identifyCharacter } from '../../src/language/identifyCharacter';

describe(identifyCharacter, () => {
    it('should identify the type of the single character', () => {
        const input = 'a';

        expect(identifyCharacter(input)).toBe('character');
    });
});

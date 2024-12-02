import { evaluate } from './evaluate.js';
import { parseTokens } from './parse.js';
import { tokenizer } from './tokenizer.js';
import { pipe } from './utils.js';

const parseAndEvaluate = pipe(tokenizer, parseTokens, evaluate);

export { parseAndEvaluate };

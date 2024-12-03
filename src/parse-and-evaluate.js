import { evaluate } from './evaluate.js';
import { parseTokens } from './parse.js';
import { tokenizer } from './tokenizer.js';
import { transform } from './transform.js';
import { pipe } from './utils.js';

const parseAndEvaluate = pipe(tokenizer, parseTokens, transform, evaluate);

export { parseAndEvaluate };

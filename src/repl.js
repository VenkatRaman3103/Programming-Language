import inquirer from 'inquirer';
import chalk from 'chalk';
import { parseAndEvaluate } from './parse-and-evaluate.js';

export const startRepl = async () => {
    let activePrompt = null;

    const askQuestions = async () => {
        const questions = [
            { name: 'COMMAND', type: 'input', message: chalk.red('> ') },
        ];

        activePrompt = inquirer.prompt(questions);
        return await activePrompt;
    };

    try {
        const answer = await askQuestions();
        const { COMMAND } = answer;

        if (COMMAND.trim().toLowerCase() === 'exit') {
            console.log(
                chalk.green('Exiting Teddy Programming Language. Goodbye!'),
            );
            process.exit(0);
        }

        if (COMMAND.trim()) {
            console.log(chalk.yellow(parseAndEvaluate(COMMAND)));
        }
    } catch (error) {
        if (error.isTtyError) {
            console.error(
                'Prompt couldn’t be rendered in the current environment.',
            );
        } else {
            console.error('Error:', error.message);
        }
    } finally {
        activePrompt = null;
    }

    setTimeout(() => startRepl(), 0);
};

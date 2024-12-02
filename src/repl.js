import inquirer from 'inquirer';
import chalk from 'chalk';
import { parseAndEvaluate } from './parse-and-evaluate.js';

const askQuestions = async () => {
    const questions = [
        { name: 'COMMAND', type: 'input', message: chalk.red('> ') },
    ];
    return await inquirer.prompt(questions);
};

const repl = async () => {
    try {
        const answer = await askQuestions();
        const { COMMAND } = answer;

        if (COMMAND.trim()) {
            console.log(chalk.yellow(parseAndEvaluate(COMMAND)));
        }
    } catch (error) {
        console.error(error);
    }
    // Use a setTimeout to avoid recursion depth issues
    setTimeout(() => repl(), 0);
};

if (import.meta.url === `file://${process.argv[1]}`) {
    console.log(
        chalk.red(
            `Welcome to the ${chalk.bgBlue('Teddy')} Programming Language`,
        ),
    );

    repl();
}

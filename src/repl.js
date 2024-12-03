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
    }
    setTimeout(() => repl(), 0);
};

process.on('SIGINT', () => {
    console.log(chalk.green('\nExiting Teddy Programming Language. Goodbye!'));
    process.exit(0);
});

if (import.meta.url === `file://${process.argv[1]}`) {
    console.log(
        chalk.red(
            `Welcome to the ${chalk.bgBlue('Teddy')} Programming Language`,
        ),
    );

    repl();
}

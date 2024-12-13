import { exec } from 'child_process';
import { promisify } from 'util';

import { logger } from "../loggers/index.js";

const execPromise = promisify(exec);

async function runCommand(command) {
    const startTime = Date.now();

    try {
        const { stderr, stdout } = await execPromise(command);

        if (stdout) {
            logger.info(stdout);
        }
        if (stderr) {
            logger.error(stderr);
        }

    } catch (error) {
        logger.error(`Command execution error: "${error.message}"`);

        if (error.stdout) {
            logger.error(`stdout: ${error.stdout}`);
        }

        if (error.stderr) {
            logger.error(`stderr: ${error.stderr}`);
        }

        throw error;
    } finally {
        const endTime = Date.now();
        const timeTaken = endTime - startTime;

        logger.info(`Command "${command}" took ${timeTaken} ms`);
    }
}

async function runTasks() {
    const taskStartTime = Date.now();

    try {
        logger.info('Starting task: Renaming icons');
        await runCommand('pnpm run rename-icons');
        logger.info('Successfully executed: Renaming icons');

        logger.info('Starting task: Generating components');
        await runCommand('npx @svgr/cli --out-dir src/assets/icons/components --jsx-runtime automatic --typescript --ref --memo --no-dimensions --replace-attr-values "#000=currentcolor" -- src/assets/icons/svg');
        logger.info('Successfully executed: Generating components');

        logger.info('Starting task: Replacing imports');
        await runCommand('pnpm run replace-imports-colors');
        logger.info('Successfully executed: Replacing imports');

        logger.info('Starting task: Formatting and Linting');
        await Promise.all([
            runCommand('pnpm run format'),
            runCommand('pnpm run lint')
        ]);
        logger.info('Successfully executed: Formatting and Linting');

        logger.info('Starting task: Replacing imports again');
        await runCommand('pnpm run replace-imports-colors');
        logger.info('Successfully executed: Replacing imports again');

        logger.info('Starting task: Formatting and Linting again');
        await Promise.all([
            runCommand('pnpm run format'),
            runCommand('pnpm run lint')
        ]);
        logger.info('Successfully executed: Formatting and Linting again');

    } catch (error) {
        logger.error(`Execution failed: ${error.message}`);
    } finally {
        const taskEndTime = Date.now();
        const totalTaskTime = taskEndTime - taskStartTime;

        logger.info(`Total task execution time: ${totalTaskTime} ms`);
    }
}

void runTasks();

import {promises as fsp} from 'node:fs';
import {join} from 'node:path';

import {logger} from '../loggers/index.js';

const dirWithIcons = "src/assets/icons/svg";


async function main() {
    try {
        const files = await fsp.readdir(dirWithIcons);

        await Promise.all(files.map(async (file) => {
            const newName = file.replaceAll(' ', '-').replaceAll('(', '').replaceAll(')', '').toLowerCase()

            await fsp.rename(join(dirWithIcons, file), join(dirWithIcons, newName));

            logger.info(`File "${file}" has been successfully renamed to "${newName}"`);
        }));

    } catch (error) {
        logger.error(`An error has occurred: ${error}`);
    }
}

void main();
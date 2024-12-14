import { promises as fsp } from "node:fs";
import { join } from "node:path";

import { logger } from "../loggers/index.js";

const dirWithComponents = "src/assets/icons/components";

async function main() {
    const startTime = Date.now();

    try {
        const files = await fsp.readdir(dirWithComponents);

        logger.info(`Found ${files.length} files in ${dirWithComponents}`);

        await Promise.all(files.map(async (file) => {
            const filePath = join(dirWithComponents, file);
            const fileContent = await fsp.readFile(filePath, "utf-8");

            const importTypeStr = "import type { SVGProps } from 'react'";
            const importStr = "import { Ref, forwardRef, memo } from 'react'";
            const combinedImportStr = "import { Ref, SVGProps, forwardRef, memo } from 'react'";

            logger.debug(`Processing file: ${filePath}`);
            if (fileContent.includes(importTypeStr) && fileContent.includes(importStr)) {
                let updatedContent = fileContent.replace(importTypeStr, "").replace(importStr, "");

                // Удалим начальные пробелы
                updatedContent = combinedImportStr + "\n" + updatedContent.trimStart();

                // Заменим все вхождения #000 на currentcolor
                updatedContent = updatedContent.replaceAll("#000", "currentcolor");

                await fsp.writeFile(filePath, updatedContent);
                logger.info(`File ${filePath} has been processed`);
            } else {
                logger.debug(`File ${filePath} does not match import criteria.`);
            }
        }));
    } catch (error) {
        logger.error(`An error has occurred: ${error.message}`);
    } finally {
        const endTime = Date.now();
        const duration = (endTime - startTime) / 1000;

        logger.info(`Processing completed in ${duration.toFixed(2)} seconds`);
    }
}

void main();

/**
 * This is all the program configuration for the CLI using commander.js
 * @link https://www.npmjs.com/package/commander
 */

const { program } = require('commander');

program
    .name('DeepLogSearch')
    .description('Small library to search specific information inside those huge logs files')
    .version('0.0.1')
    .option('-O, --output <string>', 'The output folder for the result files', './results/')
    .option('-F, --file <items>', 'The log file to analyze')// .option('-v, --verbose', 'Enable verbose logging')
    .option('-S, --search <string>', 'The search term')
    .option('--sample <number>', 'The number of sample lines to analyze. Defaults to 30', 30)
    .option('--verbose <string>', 'If you want to enable verbose logging. \'T\' for true and \'F\' for false ', 'F')

;
module.exports = program.parse();
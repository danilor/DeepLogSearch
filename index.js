#!/usr/bin/env node
/**
 * Requirements
 */

const Console = require('./class/Console.class');
const program = require('./config/Program.config');
const configuration = require('./config/default.config');
const readline = require('readline');
const FIFO = require('./class/FIFO.class');
const fs = require('fs');

const datedISO = new Date().toISOString().replace(/:/g, '-').replace(/\..+/, '');
const fileExtension = '.txt';

const fileConvention = '_result'+datedISO+'__[INDEX].'+fileExtension;

/**
 * Analyze the content
 * @returns {Promise<void>}
 */
async function analyzeContent(FIFOList, searchCounter){
    const searchTerm = program.opts().search;
    const sample  = parseInt( program.opts().sample, 10 );
    const seekLine = Math.floor( sample / 2 );


    if(FIFOList.size() === sample ){

        const line = FIFOList.peekAt(seekLine);
        if(line.toLowerCase().includes(searchTerm.toLowerCase())){
            Console.c('Search term found in line: ' + line);
            const output = program.opts().output + fileConvention.replace('[INDEX]', (searchCounter));

            try{
                await fs.writeFileSync( output, FIFOList.getItems().join('\n'), 'utf8' );
            }catch (err){
                Console.s().e('Failed to write result file: ' + output).s();
                if(program.opts().verbose === 'T'){
                    Console.s().e(err.message).s();
                    console.log(err.stack);
                }
                process.exit(1);
            }


            return (searchCounter + 1);
        }else{
            return searchCounter;
        }
    }else{
        // Do nothing
        return searchCounter;
    }

}


/**
 * Will read the file line by line
 * @returns {Promise<void>}
 */
async function readFile(){


    const filePath = program.opts().file;
    const sample  = parseInt( program.opts().sample, 10 );

    let searchCounter = 0;


    const FIFOList = new FIFO();
    FIFOList.setMaxSize(sample);


    if(!fs.existsSync(filePath)){
        Console.s().e('The specified log file does not exist: ' + filePath).s();
        process.exit(1);
    }

    Console.s().c('Reading file: ' + filePath).c('Depending on the file size, this may take a while...').c('Please wait...').s();


    try{
        const rl = await readline.createInterface({
            input: fs.createReadStream(filePath),
            crlfDelay: Infinity // Handle all common line endings
        });


        for await (const line of rl) {
            // Console.c('Reading file: ' + line);
            FIFOList.push(line);
            searchCounter = await analyzeContent(FIFOList, searchCounter);
        }

    }catch (err){
        Console.s().e('Failed to read file: ' + filePath).s();
        if(program.opts().verbose === 'T'){
            Console.s().e(err.message).s();
            console.log(err.stack);
        }
        process.exit(1);
    }

}

/**
 * Check the parameters
 * @returns {Promise<void>}
 */
async function checkParameters(){
    // Check if search term is provided
    if(program.opts().search === undefined){
        Console.s().e('No search term specified. Use the -S or --search option to specify a search term.').s();
        process.exit(1);
    }
    if(program.opts().file === undefined){
        Console.s().e('No log file specified. Use the -F or --file option to specify a log file to analyze.').s();
        process.exit(1);
    }

}

/**
 * Main function
 */
async function main() {
    Console.s().title('Deep Log Search').s();
    await checkParameters();
    await readFile();
    Console.c('Finished analyzing the log file.').c('Please find all the results in the results folder').s();
}

const r = main();
# DeepLogSearch

Small library to search specific information inside those huge logs files.

## Inspiration

Have you ever needed to find a specific error or event in a massive log file? Those with
5Gb+ size that take forever to open and search through? Sometimes you cannot even open them with
standard text editors because they crash or become unresponsive.

DeepLogSearch is here to help! This
library allows you to quickly and efficiently search through large log files and provide you
with several results files containing only the relevant lines.

## Usage

Just execute the following command in your terminal:

```bash
npx deeplogsearch -F C:/server.log --verbose T --search crork --sample 60 --output ./
```

And to get help:

```bash
npx deeplogsearch --help
Usage: DeepLogSearch [options]

Small library to search specific information inside those huge logs files

Options:
  -V, --version          output the version number
  -O, --output <string>  The output folder for the result files (default: "./results/")
  -F, --file <items>     The log file to analyze
  -S, --search <string>  The search term
  --sample <number>      The number of sample lines to analyze. Defaults to 30 (default: 30)
  --verbose <string>     If you want to enable verbose logging. 'T' for true and 'F' for false
                         (default: "F")
  -h, --help             display help for command
```
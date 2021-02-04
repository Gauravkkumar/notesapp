const validator = require('validator');

const yargs = require('yargs');
const notes = require('./notes.js')

// console.log(process.argv)

yargs.version('1.1.0')

//add,remove,read,list

yargs.command({
    command: 'add',
    describe: 'Add a new node',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }

    },
    handler: (argv) => notes.addNote(argv.title, argv.body)

})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.removeNote(argv.title)
})

yargs.command({
    command: 'read',
    describe: 'read note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => notes.getNotes(argv.title)
})

yargs.command({
    command: 'list',
    describe: 'Listing out notes',
    handler: () => notes.listNotes()
})

yargs.parse()
// console.log(yargs.argv)

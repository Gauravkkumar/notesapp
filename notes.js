const fs = require('fs')
const chalk = require('chalk')
const { title } = require('process')

const getNotes = (title) => {

    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)

    if (duplicateNote) {
        console.log(chalk.green(duplicateNote.title))
        console.log(duplicateNote.body)

    } else {
        console.log(chalk.red('Note title not Found'))
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()

    // const duplicateNotes=notes.filter((note) => note.title===title)

    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green('New Note added'))
    } else {
        console.log(chalk.red('Note title is alreday taken'))
    }


    // if (duplicateNotes.length===0){
    //     notes.push({
    //         title:title,
    //         body:body
    //     })
    //     saveNotes(notes)
    //     console.log(chalk.green('New Note added'))
    // } else{
    //     console.log(chalk.red('Note title is alreday taken'))
    // }

}

const removeNote = (title) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length > 0) {
        notes.pop({
            title: title
        })
        saveNotes(notes)
        console.log(chalk.bgGreen('Note removed!'))
    } else {
        console.log(chalk.bgRed('Note title is not present in notes'))
    }

}

const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.bgGreen("Your Notes are..."))
    // for (let i=0 ; i < notes.length;i++){
    //     let c= (notes[i]).title
    //     console.log((c))

    // }

    notes.forEach(note => {
        console.log((note.title))
    });

}


const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []

    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
}
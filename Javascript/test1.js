class Workshop {
    constructor(teacher){
        this.teacher = teacher; 
    }
    ask(question) {
        console.log(this.teacher, question);
    }
}
deepJs = new Workshop("Kyle");
reactJs = new Workshop("Suzy");

deepJs.ask("Is This class ok")
reactJs.ask("What is the best way to learn React?")
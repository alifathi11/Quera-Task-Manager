export default class Task {
    constructor(name, description, priority) {
        this.name = name;
        this.description = description;
        this.priority = priority;
        this.done = false;
    }

    get getName() {
        return this.name;
    }

    get getPriority() {
        return this.priority;
    }

    get getDescription() {
        return this.description;
    }

    get isDone() {
        return this.done;
    }

    set setName(name) {
        this.name = name;
    }

    set setDescription(description) {
        this.description = description;
    }
    
    set setPriority(priority) {
        this.priority = priority;
    }

    set isDone(done) {
        this.done = done;
    }
}
export default class Task {
    constructor(name, description, priority) {
        this.name = name;
        this.description = description;
        this.priority = priority;
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

    set setName(name) {
        this.name = name;
    }

    set setDescription(description) {
        this.description = description;
    }
    
    set setPriority(priority) {
        this.priority = priority;
    }
}
export class Job {
    constructor(id, jobTitle, sendData, limitDate, wage, location, requirements, description) {
        this.id = id;
        this.jobTitle = jobTitle;
        this.sendData = sendData;
        this.limitDate = limitDate;
        this.wage = wage;
        this.location = location;
        this.requirements = requirements;
        this.description = description;
    }
}

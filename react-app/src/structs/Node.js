export const Node = {
    department_code: "",
    course_number: "",
    course_name: "",
    description: "",
    prerequisites: null,
    completed: false,
    prereq_count: 0,
    toString() {
        return this.department_code.concat(" ", this.course_number)
    },
    format(height, width) {
        return {
            id: this.toString(),
            x: width/2,
            y: height/2
        }
    },
    parsePreqs() {
        // to convert from parse_preqs(self, preqs) in python/structs.py
    }
}
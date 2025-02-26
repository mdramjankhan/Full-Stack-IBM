const student = {
    name: "Md Ramjan Khan",
    rollNumber: 46,
    marks: {
        Math: 80,
        Science: 89,
        English: 90,
        History: 70
    },
    getAverageMarks: function() {
        const marks = Object.values(this.marks);
        const total = marks.reduce((sum, mark) => sum + mark, 0);
        return total / marks.length;
    },
    checkPassOrFail: function() {
        return this.getAverageMarks() > 40 ? "Passed" : "Failed";
    }
};

console.log(student.getAverageMarks());
console.log(student.checkPassOrFail());
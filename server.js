
const express = require('express');

const app = express();

app.use(express.json());

let students = [];

app.post('/api/students', (req, res) => {

    const { id, name, email, course, age } = req.body;

    if (!id || !name || !email || !course || !age) {
        return res.status(400).json({
            message: "All fields are mandatory"
        });
    }

    const student = {
        id: id,
        name: name,
        email: email,
        course: course,
        age: age
    };

    students.push(student);

    res.status(201).json({
        message: "Student created successfully",
        student: student
    });
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

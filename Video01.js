const course1 = { name: "Complete Web Development Bootcamp by Programming Hero" };
const course2 = { name: "Next level Web Development Bootcamp by Programming Hero" };

const courses = [
    [course1, "Level1"],
    [course2, "Level2"],
];

const map = new Map(courses);

// map.set(course1, {courseId:"Level1"});
// map.set(course2, {courseId:"Level2"});

// map.forEach((value, key) => key.name = "Shohoj Shorol Simple " + key.name);

// for(let key of map.keys()){
//     key.name = "Shohoj Shorol Simple " + key.name;
// }


console.log(map);




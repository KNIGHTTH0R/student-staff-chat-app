var speakers = [
    {id: 0, name: "Suthan", pic: "suthan.jpg", title: "Head of Department", bio: "He is a head of the department in master of computer application, completed M.E working on Dr.Sivanthi Aditanar Collge of Engineering, Tiruchendur."},
    {id: 1, name: "Antony Sophia", pic: "sophia.jpg", title: "Assistant Professor", bio: "She is a assistant professor in master of computer application, completed M.E working on Dr.Sivanthi Aditanar Collge of Engineering,Tiruchendur."},
    {id: 2, name: "Maharasi", pic: "maharasi.jpg", title: "Assistant Professor", bio: "She is a assistant professor in master of computer application, completed MCA working on Dr.Sivanthi Aditanar Collge of Engineering,Tiruchendur."},
    {id: 3, name: "Anjit Raja", pic: "anjit.jpg", title: "Associate Professor", bio: "He is a associate professor in master of computer application, completed MCA working on Dr.Sivanthi Aditanar Collge of Engineering,Tiruchendur."},
    {id: 4, name: "Durga Devi", pic: "durga.jpg", title: "Lab Assistant", bio: "She is a lab assistant in master of computer application, completed BCA working on Dr.Sivanthi Aditanar Collge of Engineering,Tiruchendur"}
];

exports.findAll = function (req, res, next) {
    res.send(speakers);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(speakers[id]);
};
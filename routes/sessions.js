var sessions = [
    {id:0 , title:"J.Vetrivel pandian", speaker:"Freelancer", pic: "vetri.jpg", time:"Udangudi",
        room:"Theater", twitter_id: "@ccoenraets",
        description: "Hi, This is Vetrivel pandian - Freelancer"},
    {id:1 , title:"Divya Balamohan", speaker:"Studying", pic: "divya.jpg", time:"Udangudi",
        room:"Ballroom A", twitter_id:"@devgirlfl",
        description: "This is divya, now studying on PhD"},

    {id:2 , title:"Mohammed Azarudeen", speaker:"Designer", pic: "azar.jpg", time:"Bangalore",
        room:"Ballroom C", twitter_id:"@mwbrooks",
        description: "This is Azarudeen, working on Wipro technologies"},

    {id:3 , title:"Jeevanantham", speaker:"Developer", pic: "jeeva.jpg", time:"Chennai",
        room:"Ballroom D", twitter_id: "@brettrudd",
        description: "This is Jeevanantham, working on HCL"},

    {id:4 , title:"Senthil Kumar", speaker:"Assistant Professor", pic: "senthil.jpg", time:"Coimbatore",
        room:"Ballroom B", twitter_id: "@infil00p",
        description: "This is senthil kumar, working on assistant professor in coimbatore."}
];

exports.findAll = function (req, res, next) {
    res.send(sessions);
};

exports.findById = function (req, res, next) {
    var id = req.params.id;
    res.send(sessions[id]);
};

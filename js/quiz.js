const person = [
    {
        name: "rahim",
        age: 22,
        friends: ["rahim,karim,jabbar"],
    },
    {
        name: "rahim2",
        age: 22,
        friends: ["rahim,karim,jabbar"],
    },
    {
        name: "rahim3",
        age: 22,
        friends: ["rahim,karim,jabbar"],
    },
];


const result = person.slice(1, 2);
console.log(result);

const dreamGirl = [
    {
        sokina: {
            name: "bbu",
            height: "5.4",
            family: [{ father: "rock", mother: "shila", sister: "chinki" }],
            age: undefined,
            contactInfo: [
                {
                    facebook: {
                        link: "https://www.facebook.com/",
                        followers: "12545",
                        status: "single",
                        friendsList: [{ name: "rofik" }, undefined],
                    },
                },
                { instagram: "https://www.instagram.com/" },
            ],
        },
    },
];

console.log(dreamGirl[0].sokina.contactInfo[1].instagram);


const phones = [
    { name: "sony", price: 500 },
    { name: "apple", price: 700 },
    { name: "sony", price: 700 },
];


const outResult = phones.filter(name => name.price !=500);
console.log(outResult);
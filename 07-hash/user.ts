let user = {
    name: "John",
    age: 30,
    magic: true,
    scream: () => {
        console.log("AHHHHHHH!");
    },
    spell: "",
};

user.spell = "abra kadabra";
user.scream();
console.log(user);
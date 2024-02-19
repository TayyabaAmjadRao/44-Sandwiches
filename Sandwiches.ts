//written by ; TAYYABA RAO
//Date: 18/feb/2024
//Roll no : 00388416

function makeSandwiches(items: string[]): void{
    console.log("Making a sandwiches:");
    items.forEach(item => console.log("-" + item));
    console.log("Enjoy your sandwiches!\n");
}

makeSandwiches(["Ham", "Cheese", "Lettuce"]);
makeSandwiches(["Turkey", "Bacon"]);
makeSandwiches(["Peanut Butter", "Jelly"]);
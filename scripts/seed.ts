//pure node js file
const { PrismaClient } = require("@prisma/client");

// instance of prismaClient
const db = new PrismaClient();

async function main() {
  try {
    // creating a category  in database
    await db.category.createMany({
      data: [
        { name: "People" },
        { name: " Movies" },
        { name: "Musicians" },
        { name: "Games" },
        { name: "Animals" },
        { name: "Philosophy" },
        { name: "Researcher" },
        { name: "Anime" },
      ],
    });
  } catch (error) {
    // if got error while creating a category
    console.log("Error seeding default categories", error);
  } finally {
    //for disconnecting from database regardless of  succes and failure. $ is an spcial method by prisma client.

    await db.$disconnect();
  }
}

main();

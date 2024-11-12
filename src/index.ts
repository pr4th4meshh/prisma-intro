import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

async function test(name: string) {
  try {
    const res = await prisma.test.create({
      data: {
        name,
      },
    })
    console.log(res)
  } catch (error) {
    console.error("Error creating test:", error)
  } finally {
    await prisma.$disconnect()
  }
}

async function main() {
  await test("Prath")
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})

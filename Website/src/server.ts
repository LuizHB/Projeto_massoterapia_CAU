import Fastify from 'fastify'
import { PrismaClient } from '@prisma/client'
import cors from '@fastify/cors'

const app = Fastify()
const prisma = new PrismaClient()

app.register(cors,{
    origin: [ 'https://localhost:3333']
})

app.get('/hello', async () => {
    const habits = await prisma.habit.findMany({
        where: {
            title: {
                startsWith: 'Teste'
            }
        }
    })

    return habits
})

app.listen({ port: 3333, }).then(() => { console.log('Server running') })
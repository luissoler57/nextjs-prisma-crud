import TaskCard from '@/components/TaskCard'
import { prisma } from '@/libs/prisma'

async function loadTasks() {
  // const res = await fetch('http://localhost:3000/api/tasks')
  // const data = await res.json()
  return await prisma.task.findMany()
}

export default async function HomePage() {
  const tasks = await loadTasks()
  return (
    <section className='container mx-auto mt-10'>
      <div className='grid grid-cols-3 gap-3'>
        {tasks.map((task) => (
          <TaskCard task={task} key={task.z} />
        ))}
      </div>
    </section>
  )
}

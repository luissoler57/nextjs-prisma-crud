import Link from 'next/link'

function NavBar() {
  return (
    <nav className='bg-slate-900'>
      <div className='container mx-auto flex justify-between items-center py-3'>
        <Link href={'/'} className='text-slate-300 hover:text-slate-200'>
          <h3 className='text-3xl font-bold'>Next CRUD</h3>
        </Link>
        <ul className='flex gap-x-2 text-lg font-bold'>
          <li className='text-slate-300 hover:text-slate-200'>
            <Link href={'/new'}>New</Link>
          </li>
          <li className='text-slate-300 hover:text-slate-200'>
            <Link href={'/about'}>about</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default NavBar

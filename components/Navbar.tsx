import Link from 'next/link'

export default function Sidebar() {
    return (
        <nav>
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-center h-16">
                    <div className='hidden sm:block'>
                        <div className='ml-4 flex items-center space-x-4'>
                            <Link href="/" className='text-white hover:bg-indigo-700 hover:text-indigo-200 rounded py-0.5 px-3'>Home</Link>
                            <Link href="/biodata" className='text-white hover:bg-indigo-700 hover:text-indigo-200 rounded py-0.5 px-3'>Biodata</Link>
                            <Link href="/profile" className='text-white hover:bg-indigo-800 hover:text-indigo-200 rounded py-0.5 px-3'>Profile</Link>
                        </div>
                    </div>
                    <div className='block sm:hidden justify-between'>
                        <div className='flex items-center'>
                            <Link href="/" className='text-white hover:bg-indigo-700 hover:text-indigo-200 rounded py-0.5 px-3'>Home</Link>
                            <Link href="/biodata" className='text-white hover:bg-indigo-700 hover:text-indigo-200 rounded py-0.5 px-3'>Biodata</Link>
                            <Link href="/profile" className='text-white hover:bg-indigo-800 hover:text-indigo-200 rounded py-0.5 px-3'>Profile</Link>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    )
}
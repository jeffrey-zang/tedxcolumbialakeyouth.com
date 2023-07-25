import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='grid place-items-center'>
      <img src={`https://placebear.com/${(Math.random() > 0.8) ? 'g/' : ""}${Math.round(Math.random() * 600 + 400)}/${Math.round(Math.random() * 600 + 400)}`} alt='bearimg' className='w-1/4 aspect-square object-cover rounded-full' />
      <h1 className='mt-8 text-4xl'>404</h1>
      <p>Page not found</p>
      <p>This bear is lost and so are you</p>
      <Link to='/'>Go home</Link>
    </div>
  )
}

export default NotFound
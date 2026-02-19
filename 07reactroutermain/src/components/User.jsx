import { useParams } from 'react-router'

const User = () => {
  const user = useParams()
  return (
    <section className="p-6">
      <h1 className="text-7xl font-bold">I AM USER {user.pid}</h1>
    </section>
  )
}

export default User
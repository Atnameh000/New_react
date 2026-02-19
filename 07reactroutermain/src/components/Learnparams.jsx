import { Link } from "react-router"

const Learnparams = () => {
  const users = ["ram","sham","hari","hemanta"]
  return (
    <div>
        {
            users.map((user) =>(
            <Link to={`/params/${user}`}><li>USER {user.toUpperCase()}</li></Link>
            ))
        }
    </div>
  )
}

export default Learnparams
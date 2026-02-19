import { useEffect, useState } from "react"
import { useLoaderData } from "react-router"

const Github = () => {
  const data = useLoaderData()
  // const [data, setData] = useState({})
  // useEffect(()=>{
  //   fetch("https://api.github.com/users/hiteshchoudhary")
  //   .then((res) =>  res.json())
  //   .then((res) => setData(res))
  //   .catch(() => console.log("failed to load data from the api"))
  // },[])
  console.log(data)
  return (
    <div>
      <img src={data.avatar_url}/>
       Followers:{data.followers}
    </div>
  )
}

export default Github
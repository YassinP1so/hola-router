import React, {useEffect , useState} from 'react';
import { useParams } from 'react-router-dom';
import { moviesData } from '../Components/Data';
const Trailer = () => {
  const { id } = useParams();
const [ data , setData ] = useState({})
  useEffect(() => {
    const movieT = moviesData.find((el) => el.id == id);
    setData(movieT);
  }, [id])
  return (
    <div>
    <iframe src={data.trailer} title="trailer" allowfullscreen width="1940px" height="900px"/>
    </div> 
  )
}

export default Trailer
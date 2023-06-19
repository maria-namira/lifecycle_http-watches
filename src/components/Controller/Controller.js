import AddForm from "../AddForm/AddForm";
import { useState, useEffect } from "react";
import WatchList from "../WatchList/WatchList";


export default function Controller() {
  const [list, setList] = useState([]);

  useEffect(() => {
    console.log('useEffect list', list);
    
  }, [list])
  

  const addWatch = (watch) => {
    console.log('watch', watch);
    setList((prevList) => [...prevList, watch]);
  }

  const onDelete = (id) => {
    // console.log('onDelete list', list);
    // console.log('id', id);
    
    
    setList((prev )=>{
      console.log('prev', prev);
      const newArr = prev.filter((el) => el.id !== id)
      console.log('newArr', newArr);
      return newArr

    })
  }
  
  return (
    <div className="app">
      <AddForm addWatch={addWatch} />
      <WatchList list={list} onDelete={onDelete} />
    </div>
  )
}
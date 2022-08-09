import store from "../../store/index";
const Home = () => {
    const handleIncrement = () => {
        store.dispatch({
            type:'increment',
            payload:{
                id:1
            }
        })
    }
    const changeCount = () => {
        let tempState = store.getState()
        console.log('tempState')
        console.log(tempState)
    }
    store.subscribe(changeCount)
  return (
    <>
      <div>我是home</div>
      {/* <span>count:{count}</span> */}
      <button onClick={handleIncrement}>increment</button>
    </>
  );
};
export default Home;

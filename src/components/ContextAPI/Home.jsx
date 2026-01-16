import  { useBioContext } from '.'


const Home = () => {
    const {myName,myAge}=useBioContext();
    
  return (
    <section className='p-4 h-lvh tracking-wider flex flex-col justify-center bg-gray-900 font-white'>
        <h1>Hello Home {myName} {myAge}</h1>
    </section>
  )
}

export default Home;
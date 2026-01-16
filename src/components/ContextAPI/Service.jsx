import  { useBioContext } from '.'


const Service = () => {
    const {myName,myAge}=useBioContext();
    
  return (
    <section className='p-4 h-lvh tracking-wider flex flex-col justify-center bg-gray-900 font-white'>
        <h1>Hello Service {myName} {myAge}</h1>
    </section>
  )
}

export default Service;
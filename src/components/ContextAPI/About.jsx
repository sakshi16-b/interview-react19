import { useContext } from 'react';
import  { useBioContext } from '.'
import { BioContext } from '.';


const About = () => {
    // const {myName,myAge}=useBioContext();//with the help of custom hook
    const {myAge,myName}=useContext(BioContext)
    
  return (
    <section className='p-4 h-lvh tracking-wider flex flex-col justify-center bg-gray-900 font-white'>
        <h1>Hello About {myName} {myAge}</h1>
    </section>
  )
}

export default About;
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <div className='fixed'>
        <h1 className='text-9xl bg-red-300 text-center'>Big</h1>
        <p className='text-3xl text-center'>website</p>
      </div>
      
      <img src="/pizza.jpg" width="1000" className='float-right'/>
      <p className='pt-52 text-9xl'>Story time: I like pizza</p>

      <img src="/OIP.jpg" width="1000" className='mt-98 float-left'/>
      <p className='mt-52 text-9xl text-right text-white'>d</p>
      <p className='mt-52 text-9xl text-right'>Mr breast had my pizza</p>

      <img src="/maxresdefault.jpg" width="1000" className='float-right'/>
      <p className='pt-52 text-9xl'>He's Evil </p>
    </main>
  )
}

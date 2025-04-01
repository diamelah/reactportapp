import React from 'react'
import ImageCard from '../components/ImageCard'
import SignatureCanvas from '../components/SignatureCanvas'

const firmas = () => {
  return (
    <div>
    <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
    <div className="p-4 lg:w-1/1 ">
                    <div className="h-full bg-accent  px-8 pt-9 pb-24 rounded-lg overflow-hidden text-center relative">
                    <ImageCard />
                    </div>
                    </div>

                    <div className="p-4 lg:w-1/1">
                    <div className="h-full bg-accent  px-8 pt-9  rounded-lg overflow-hidden text-center relative">
                        <SignatureCanvas />
                    </div>
                    </div>
                    </div>
                    </div>
                    </div>
  )
}

export default firmas;

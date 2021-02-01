import React from 'react';
import image from '../images/pexels-lisa-fotios-4511372.jpg';

export default function Home() {
    return (
       <main>
           <img src={image} alt="Pexels by Lisa Fotios" className="absolute object-cover w-full h-full"/>
           <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
               <h1 className="text-3xl text-blue-200 font-bold cursive leading-none lg:leading-snug home-name">
                    Hi, I'm Tony. </h1>
           </section>
       </main>
    );
}
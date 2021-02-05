import React from 'react';
import image from '../images/pexels-lisa-fotios-4511372.jpg';

export default function Home() {
    return (
       <main className="bg-gray-200 flex h-screen">
           <section className="m-auto justify-center pt-12 lg:pt-64 px-8">
                <h1 className="align-top text-3xl text-gray-500 font-bold cursive leading-none lg:leading-snug home-name object-top">
                    Hi, I'm Tony. 
                </h1>
                <br />
                <p className="align-bottom text-gray-400 font-bold leading-none px-8 object-bottom">
                    I like to design games, write code, and help people do the same. Welcome to my blog!</p>
           </section>

       </main>
    );
}


export function Home(){
    return (
        <body className="bg-blue-300 min-h-screen">    
        <div className="flex flex-col w-full py-4 items-center justify-center bg-blue-300">
            <h1 className="md:text-4xl  text-3xl font-bold text-white">Ivan Dev</h1>
            <span className="text-gray-50 mb-4 mt-3">Veja meus Links👇</span>

            <main className=" flex flex-col w-11/12 max-w-xl text-center bg-blue-300">
                <section className="bg-white mb-4 w-full py-2  rounded-lg transition-transform hover:scale-110 cursor-pointer">
                    <a href="">
                        <p className=" text-base md:text-lg">
                            Canal no Youtube
                        </p>
                    </a>
                </section>

                <footer className="flex justify-center gap-3 my-4"></footer>
            </main>
        </div>
        </body>
    )
}
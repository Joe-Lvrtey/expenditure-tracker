const Brands = () => {
    return (
        <div className="bg-[#416180]">
            <div className="flex flex-col justify-between items-center lg:items-start h-full lg:h-[90%] my-0 mx-auto">
                <div className="">
                    <h1 className="text-white tracking-wide text-3xl md:text-5xl p-8">Ledger</h1>
                </div>
                <div className="flex justify-center items-center h-full p-8">
                    <div className="text-center lg:text-start">
                        <p className="text-white py-4 text-xl md:text-4xl lg:text-5xl">Your notes app, with <br className="hidden lg:block" />arithmetic.</p>
                        <p className="text-gray-300 text-[18px] md:text-3xl">Paste a week the way you already write it;  Uber ride - 90 + 25 — and it becomes structured, split, categorised and charted.</p>
                    </div>
                </div>
                <div className="flex items-center gap-4 text-[#7fa8ce] p-8">
                    <span>Multi-currency</span>
                    <span>CSV/PDF</span>
                    <span>Shared accounts</span>
                </div>
            </div>
        </div>
    )
}

export default Brands
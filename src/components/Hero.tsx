import { ArrowUpRight } from 'lucide-react';
import { Gutter } from "./Gutter";
import { Button } from "./ui/button"

const Hero = () => {
    return (
        <Gutter>
            <section id='hero'>
                <div className="left-content">
                    <h1>
                        Elevate Your Space With Elegant Simplicity Furniture Design
                    </h1>
                    
                    <div className="flex flex-col gap-6 flex-1">
                        <div className="flex flex-wrap gap-3 px-5 justify-center mb-3 ">
                            <div className="btn-filter-active">Popular</div>
                            <div className="btn-filter-non-active">Exclusive</div>
                            <div className="btn-filter-non-active">Hot Picks</div>
                            <div className="btn-filter-non-active">LimitedEdition</div>
                        </div>
                        
                        {/* Product Showcase */}
                        <div className="product-showcase ">
                            <div className="product-showcase-item">
                                {/* Left content section */}
                                <div className="flex-1 space-y-6">
                                    <span>
                                        Popular
                                    </span>
                                    
                                    <h2 className="text-4xl lg:text-2xl text-gray-900 leading-tight mt-6">
                                        Megna Karta Spul
                                    </h2>
                                    
                                    <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                                        Experience high-end materials, expert detailing, and enduring design in every piece.
                                    </p>
                                    
                                    <div className="rounded-[100%] w-10 h-10  bg-stone-200 bottom-5">
                                        <ArrowUpRight size={5} className="w-10 h-10  rounded-[100%] text-gray-600" />
                                    </div>
                                </div>
                                
                                {/* Right image section */}
                                <div className="flex-[0.5448] w-full">
                                    <div className="relative">
                                        <img
                                            src="/images/table.jpeg"
                                            alt="Megna Karta Spul - Modern wooden coffee table with cane webbing detail in a contemporary living room setting"
                                            className="rounded-2xl w-[120%] object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Right Section */}
                <div className="right-content">
                    <img
                        src="/images/natureLofa.jpeg"
                        alt="Nature Lofa furniture piece"
                    />

                    <div className='description'>
                        <h2>
                            Megna Karta Spul
                        </h2>
                        <p>
                            Experience high-end materials, expert detailing, and enduring design in every piece.
                        </p>
                        <div className="absolute -bottom-2 flex flex-row item-center gap-4 mt-4">
                            <Button variant={"outline"} className="absolute bottom-5 rounded-full px-6">
                                view product
                            </Button>
                            <div className="rounded-[100%] w-7 h-7  bg-stone-200 absolute bottom-6 left-36">
                                <ArrowUpRight className="w-7 h-7  rounded-[100%] text-gray-600" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Gutter>
    );
};

export default Hero;

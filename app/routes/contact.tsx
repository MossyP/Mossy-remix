export function Contact() {
    return (
        <div className="flex items-center relative px-4 sm:px-6 py-8 sm:py-16 md:py-24 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full">
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 sm:mb-12 md:mb-16">Contact</h2>

                <div className="space-y-8 sm:space-y-10 md:space-y-12">
                    <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">SNS</h3>
                        <div className="flex gap-6 sm:gap-8">
                            <a
                                href="https://twitter.com/Mossy_tw"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-lg sm:text-xl hover:text-[#DA5A5A] transition-colors"
                            >
                                <img src="/twitter.svg" alt="Twitter" className="w-6 h-6 sm:w-8 sm:h-8" />
                                Twitter
                            </a>
                            {/* 他のSNSリンクも同様に追加可能 */}
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Email</h3>
                        <a
                            href="mailto:contact@example.com"
                            className="text-lg sm:text-xl hover:text-[#DA5A5A] transition-colors"
                        >
                            contact@example.com
                        </a>
                    </div>

                    <div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">お仕事のご依頼</h3>
                        <p className="text-base sm:text-lg md:text-xl leading-relaxed">
                            お仕事のご依頼は上記のSNSまたはEmailにてお願いいたします。
                            <br />
                            内容を確認次第、ご返信させていただきます。
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

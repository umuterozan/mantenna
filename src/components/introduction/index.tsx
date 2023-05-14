import Link from "next/link";
import { CgScreen } from "react-icons/cg";

export default function Introduction() {
    return (
        <div className="h-full lg:flex items-center justify-center">
            <div className="max-w-[1000px] bg-[#2D2727] p-10 rounded text-white grid gap-y-20 relative">
                <div className="absolute top-4 left-4">🔴🟡🟢</div>

                <div className="flex items-center justify-center gap-x-6 flex-col sm:flex-row">
                    <div className="text-[64px] sm:text-[128px]">
                        <CgScreen />
                    </div>
                    <div>
                        <h1 className="font-light text-4xl sm:text-8xl">
                            Mantenna
                        </h1>
                    </div>
                </div>

                <div className="grid gap-y-4">
                    <h3 className="text-2xl sm:text-4xl font-medium">
                        Mantenna nedir❓
                    </h3>
                    <div className="grid gap-y-2 sm:text-lg font-light">
                        <p>
                            📌 Mantenna, youtube üzerindeki birden fazla yayını aynı
                            anda izlemenize olanak tanıyan bir web
                            uygulamasıdır.
                        </p>
                        <p>
                            📌 Mantenna&apos;nın en çok haber kanallarını takip
                            etmeye yarayacağını düşündüğümüz için varsayılan
                            olarak haber kanalları eklenmiştir.
                        </p>
                    </div>
                </div>

                <div className="grid gap-y-2">
                    <h3 className="text-2xl sm:text-4xl font-medium">
                        Nasıl kullanılır❓
                    </h3>
                    <div className="grid gap-y-2 sm:text-lg font-light">
                        <p>
                            📌 Sol tarafta yer alan kumanda ikonuna tıkladıktan
                            sonra açılan menüden ekrana yerleştirmek istediğiniz
                            kanalları seçebilir, ayarlamalarını yapabilir ve
                            menüdeki listede olmayan bir kanalı
                            ekleyebilirsiniz.
                        </p>
                        <p>
                            📝 Zaman zaman canlı yayınların youtube bağlantı
                            adresleri değişebilmekte, kanal ayarlarından
                            bağlantı adresini güncelleyebilirsiniz.
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <h6 className="font-light text-sm sm:text-base">
                        Bu proje açık kaynak kodludur, soru ve önerilerinizi{" "}
                        <Link
                            href="https://github.com/umuterozan/mantenna"
                            target="blank"
                        >
                            <div className="inline-flex items-center border-b">
                                <div>🔗</div>
                                <div>buradan</div>
                            </div>
                        </Link>{" "}
                        iletebilirsiniz.
                    </h6>
                </div>
            </div>
        </div>
    );
}

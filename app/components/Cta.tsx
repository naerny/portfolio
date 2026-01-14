'use client'
import CtaBtn from "./CtaBtn"

interface BtnProps {
  input: string[];
}

export default function Cta({ input }: BtnProps) {
  return (
    <section className="w-full flex justify-center">
      <div className="reveal-delay w-full lg:max-w-4xl p-2 rounded-xl bg-(--foreground) text-(--background)">
        <div className="border border-dashed border-(--background) rounded-lg p-6 flex justify-center">
          <div>
            <h2 className="h2">Envie de collaborer?</h2>
            <p className="">Ou simplement d'en savoir plus?</p>

            <div className="inline-block mt-4">
              <CtaBtn mailParts={input} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
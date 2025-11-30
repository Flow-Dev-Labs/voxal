export default function Home() {
  return (
    <div className="flex flex-col gap-4 min-h-screen items-center justify-center bg-white font-sans dark:bg-black">
      <h1 className="text-4xl font-bold">Hey, I&apos;m Voxal!</h1>
      <p className="max-w-2xl text-left leading-relaxed">
        Voxal is an AI-powered voice note-taker designed for high-context
        environments (Lectures, Medical Clinics, Business Meetings). Core USP:
        It handles &quot;Code-Switching&quot; (Egyptian Arabic
        &quot;English&quot;) better than competitors by combining specialized
        Python transcription with dynamic LLM personas.
      </p>
    </div>
  );
}

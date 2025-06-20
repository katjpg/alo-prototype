import { ChatInput } from './_components/chat-input'

export default function ChatPage() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="w-full max-w-3xl px-8">
        <ChatInput />
      </div>
    </div>
  )
}
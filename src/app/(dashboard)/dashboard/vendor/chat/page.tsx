import ChatHeader from './components/ChatHeader'
import Conversation from './components/Conversation'
import InputGroup from './components/InputGroup'

const VendorChat = () => {
  return (
    <div className="flex h-full flex-col justify-between bg-white">
      <ChatHeader />
      <Conversation />
      <InputGroup />
    </div>
  )
}

export default VendorChat

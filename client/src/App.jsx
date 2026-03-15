import ChatLIst from "./components/ChatLIst";
import ChatView from "./components/ChatView";
import DockBar from "./components/DockBar";

function App() {
  return (
    <>
      <main className="flex min-w-full min-h-full">
        <DockBar />
        <ChatLIst />
        <ChatView />
      </main>
    </>
  );
}

export default App;

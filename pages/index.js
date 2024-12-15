import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { role: "system", content: "Do you want a new situation?" },
  ]);
  const chatContainerRef = useRef(null);

  useEffect(() => {
    // Scroll to the bottom of the chat container whenever chatHistory changes
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop =
        chatContainerRef.current.scrollHeight;
    }
  }, [chatHistory]);

  const sendMessage = async (complexity) => {
    // Append user message to chat history
    const message = `Сформуй ситуаційну головоломку складності ${complexity} для гри "Так/Ні". Текст має бути логічним, інтригуючим і читатися легко. Відповідь повинна бути нестандартною, але повністю логічною, щоб учасники могли дійти до неї через запитання "так/ні". Формат: 
Ситуація: [текст ситуації, що викликає здивування або цікавість].  
Відповідь: [логічне пояснення ситуації]. 

Приклад:  
Ситуація: Чоловік зайшов у кафе, замовив склянку води і несподівано отримав постріл у груди.  
Відповідь: Чоловік заїкався. Він попросив склянку води, щоб впоратися з заїканням, але бармен вирішив допомогти іншою методою – налякати його пострілом (він стріляв холостими).
`;
    setChatHistory((prev) => [...prev, { role: "user", content: `Нова ситуація - ${complexity} складності` }]);

    // Send the user's message to the server
    const response = await fetch("/api/generate?endpoint=chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message }),
    });

    const data = await response.json();
    if (data.success) {
      // Open a connection to receive streamed responses
      const eventSource = new EventSource("/api/generate?endpoint=stream");
      eventSource.onmessage = function (event) {
        // Parse the event data, which is a JSON string
        const parsedData = JSON.parse(event.data);

        // Check if the last message in the chat history is from the assistant
        setChatHistory((prevChatHistory) => {
          const newChatHistory = [...prevChatHistory];
          if (
            newChatHistory.length > 0 &&
            newChatHistory[newChatHistory.length - 1].role === "assistant"
          ) {
            // If so, append the new chunk to the existing assistant message content
            newChatHistory[newChatHistory.length - 1].content += parsedData;
          } else {
            // Otherwise, add a new assistant message to the chat history
            newChatHistory.push({ role: "assistant", content: parsedData });
          }
          return newChatHistory;
        });
      };
      eventSource.onerror = function () {
        eventSource.close();
      };
    }
  };

  const clearChat = async () => {
    // Clear the chat history in the client state
    setChatHistory([
      { role: "system", content: "You are a helpful assistant." },
    ]);

    // Reset the chat history on the server
    await fetch("/api/generate?endpoint=reset", { method: "POST" });
  };
  
  const Complexity = {
  EASY: "легкої",
  MEDIUM: "середньої",
  HARD: "складної",
  };

  function handleComplexityInput(complexity) {
  // Check if the provided complexity is valid
    if (!Object.values(Complexity).includes(complexity)) {
      console.error("Invalid complexity level provided.");
      return;
    }

    // Prevent the default form submission or action
    event.preventDefault();
  
    // Send the message
    sendMessage(complexity);

    // Clear the message input or any related field
    setMessage("");
}

  const onSubmitEasy = (event) => {
   handleComplexityInput(Complexity.EASY);
  };
  const onSubmitMedium = (event) => {
   handleComplexityInput(Complexity.MEDIUM);
  };
  const onSubmitHard = (event) => {
   handleComplexityInput(Complexity.HARD);
  };

  return (
    <div>
      <Head>
        <title>Yes/No Game generator</title>
      </Head>
      <h1 className={styles.heading1}>Yes/No Game generator</h1>
      <div className={styles.chatContainer} ref={chatContainerRef}>
        {chatHistory.map((msg, index) => (
          <div
            key={index}
            className={
              msg.role === "user" ? styles.userMessage : styles.assistantMessage
            }
          >
            {msg.content}
          </div>
        ))}
      </div>
      <div className={styles.messageInputContainer}>
        <form onSubmit={onSubmitEasy}>
          <div className={styles.buttonGroup}>
            <input className={styles.inputSubmit} type="submit" value="New puzle - Easy" />
          </div>
        </form>
        <form onSubmit={onSubmitMedium}>
          <div className={styles.buttonGroup}>
            <input className={styles.inputSubmit} type="submit" value="New puzle - Medium" />
          </div>
        </form>
        <form onSubmit={onSubmitHard}>
          <div className={styles.buttonGroup}>
            <input className={styles.inputSubmit} type="submit" value="New puzle - Hard" />
          </div>

        </form>
         <button
              className={styles.inputButton}
              type="button"
              onClick={clearChat}
            >
              Clear
            </button>
      </div>

    </div>
  );
}

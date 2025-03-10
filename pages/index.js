import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import styles from "./index.module.css";

export default function Home() {
  const [message, setMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { role: "system", content: "You are a helpful assistant that generates logical and intriguing situational puzzles." },
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
      const message = `Create a new and original situation puzzle (lateral thinking puzzle) that has never appeared online before. Format as JSON with two fields: "puzzle" (a one-sentence mysterious scenario) and "solution" (the explanation, 2-3 sentences). Make it creative and surprising, but logical once explained. Example format: {"puzzle": "A man lies dead surrounded by 53 bicycles.", "solution": "He was a cyclist who cheated using performance enhancers, was caught and exposed, then committed suicide out of shame."}`;
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
  EASY: "Легко",
  MEDIUM: "Середньо",
  HARD: "Складно",
  };

  function handleComplexityInput(complexity) {
  // Check if the provided complexity is valid
    if (!Object.values(Complexity).includes(complexity)) {
      console.error("Invalid complexity level provided");
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
         <style jsx global>{`
    body {
      background: linear-gradient(to bottom, #f7f8fa, #ffffff);
      font-size: 16px;
      line-height: 24px;
      color: #353740;
      font-family: "ColfaxAI", Helvetica, sans-serif;
      margin: 0;
      padding: 0;
    }
  `}</style>
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
            {msg.role === "user" ? (
              <strong>Наступна:</strong>
            ) : (
              <strong>Генератор:</strong>
            )}
            <p>{msg.content}</p>
          </div>
        ))}
      </div>

  <div className={styles.verticalButtonsContainer}>
  <button
    className={`${styles.button} ${styles.complexityButton}`}
    onClick={() => handleComplexityInput(Complexity.EASY)}
  >
    New Puzzle - Easy
  </button>
  <button
    className={`${styles.button} ${styles.complexityButton}`}
    onClick={() => handleComplexityInput(Complexity.MEDIUM)}
  >
    New Puzzle - Medium
  </button>
  <button
    className={`${styles.button} ${styles.complexityButton}`}
    onClick={() => handleComplexityInput(Complexity.HARD)}
  >
    New Puzzle - Hard
  </button>
  <button
    className={`${styles.button} ${styles.clearButton}`}
    onClick={clearChat}
  >
    Clear
  </button>
</div>


    </div>
  );
}

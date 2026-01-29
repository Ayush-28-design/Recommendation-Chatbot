
window.watsonAssistantChatOptions = {
  integrationID: "e0cbd445-8d82-446c-ad0b-b71584921d69",
  region: "au-syd",
  serviceInstanceID: "20ebeae6-3252-45d3-8761-659d67b9baf8",
  onLoad: async (instance) => {
    window.chatInstance = instance;
    await instance.render();
  },
};

setTimeout(() => {
  const script = document.createElement("script");
  script.src =
    "https://web-chat.global.assistant.watson.appdomain.cloud/versions/" +
    (window.watsonAssistantChatOptions.clientVersion || "latest") +
    "/WatsonAssistantChatEntry.js";
  document.head.appendChild(script);
});

// Open Chat Button Function
function openChat() {
  if (window.chatInstance) {
    window.chatInstance.openWindow();
  } else {
    alert("Chat is loading, please wait...");
  }
}

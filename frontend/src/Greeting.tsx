import React, { useState, useEffect, useRef } from "react";
import axios, { AxiosResponse } from "axios";

interface Greeting {
  message: string;
}

function GreetingBanner() {
  const [greeting, setGreeting] = useState<Greeting>();
  const messageInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    (async () => {
      const response: AxiosResponse<Greeting> = await axios.get("/api/hello");
      setGreeting(response.data);
    })();
  }, []);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const message = messageInput?.current?.value;
    if (!message) {
      return;
    }

    (async () => {
      const response: AxiosResponse<Greeting> = await axios.put("/api/hello", {
        message
      });
      setGreeting(response.data);
    })();
  };

  return (
    <div>
      <p>{greeting?.message}</p>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="message"
          placeholder="Message..."
          ref={messageInput}
        />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default GreetingBanner;

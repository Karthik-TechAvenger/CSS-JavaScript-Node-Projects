import { serve } from "bun";
serve({
  fetch(request) {
    const url = new URL(request.url);
    if (url.pathname === "/") {
      return new Response("Hello Ice coffee", { status: 200 });
    } else if (url.pathname === "/iced-coffee") {
      return new Response("Iced Latte is good", { status: 200 });
    } else {
      return new Response("404 Not found", { status: 404 });
    }
  },
  port: 3002,
  hostname: "127.0.0.1",
});

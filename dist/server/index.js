export default {
  async fetch(request, env) {
    if (!env.ASSETS || typeof env.ASSETS.fetch !== "function") {
      return new Response("Static assets are unavailable.", { status: 503 });
    }
    return env.ASSETS.fetch(request);
  }
};

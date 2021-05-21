({
  access: "public",
  method: async () => {
    console.log("client");
    console.log("API");
    const test = lib.example.add({ a: "1", b: "1" });
    console.debug(test);
  },
});

module.exports = {
  config: {
    name: "command",
    aliases: ["cmd"],
    description: "Command Module Deployment",
    author: "Liane",
    usage: ":cmd [load|loadall] <file>",
    license: "ISC",
  },

  run: async ({ box, event, args }) => {
    try {
      const { load, loadAll } = global.yue;
      switch (args[0]) {
        case "load":
          if (args[1]) {
            await load(args[1]);
            box.reply("✅ Done");
          } else {
            box.reply("Missing name");
          }
          break;
        case "loadAll":
          await loadAll();
          box.reply("✅ Done");
      }
    } catch (err) {
      box.reply(err.message);
    }
  },
};

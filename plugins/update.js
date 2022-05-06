const simpleGit = require("simple-git")
const git = simpleGit()
const Asena = require("../Utilis/events")
const Config = require("../config")
const Heroku = require("heroku-client")
const heroku = new Heroku({ token: Config.HEROKU.API_KEY })
const sss = "```"
async function updateChecker() {
  await git.fetch()
  let commits = await git.log([Config.BRANCH + "..origin/" + Config.BRANCH])
  if (commits.total === 0) return false
  let newcommits = ""
  commits["all"].map((commit) => {
    newcommits += `🔹 *[ ${commit.date.substring(0, 10)} ] :* ${sss}${
      commit.message
    }${sss} <${commit.author_name}>\n`
  })
  return newcommits
}

Asena.addCommand(
  { pattern: "update$", fromMe: true, desc: "تحقق من تحديث البوت." },
  async (message, match) => {
    let isupdate = await updateChecker()
    if (!isupdate) return await message.sendMessage("*Bot is up-to-date.*")
    return await message.sendMessage("*تحديثات جديدة*\n\n" + isupdate)
  }
)

Asena.addCommand(
  {
    pattern: "update now$",
    fromMe: true,
    desc: "للتحديث",
    dontAddCommandList: true,
  },
  async (message, match) => {
    let isupdate = await updateChecker()
    if (!isupdate)
      return await message.sendMessage(
        "*Bot is up-todate.*\n*لا شيء للتحديث.*"
      )
    if (Config.HEROKU.HEROKU) {
      await message.reply("```التحديث...```")
      try {
        var app = await heroku.get("/apps/" + Config.HEROKU.APP_NAME)
      } catch {
        await message.sendMessage(
          "*تفاصيل Heroku غير صالحة * \ n * تحديث اسم Heroku APP ومفتاح Heroku API*"
        )
      }
      git.fetch("upstream", Config.BRANCH)
      git.reset("hard", ["FETCH_HEAD"])
      let git_url = app.git_url.replace(
        "https://",
        "https://api:" + Config.HEROKU.API_KEY + "@"
      )
      try {
        await git.addRemote("heroku", git_url)
      } catch {
        console.log("إرفاق جهاز التحكم عن بعد heroku")
      }
      await git.push("heroku", Config.BRANCH)
      await message.sendMessage("*محدث*")
    } else {
      git.pull(async (err, update) => {
        if (update && update.summary.changes) {
          await message.sendMessage("*محدث*")
          exec("npm install").stderr.pipe(process.stderr)
        } else if (err) return await message.sendMessage(err)
      })
    }
  }
)

module.exports = { updateChecker }

// Import External modules
import * as dotenv from "dotenv"
import express from "express"
import cors from "cors"
import helmet from "helmet"

dotenv.config({ path: "./.env.local" })

const app = express()

app.use(helmet())
app.use(
  cors({
    origin: "*", // Add the allowed points only, never allow from everywhere
    // origin: ['http://localhost:3000/'],
  })
)

// ------------------------- Starting The Server -------------------------
const PORT: number = Number(process.env.PORT) || 5001
;(() => {
  try {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`)
    })
  } catch (error) {
    console.log(error)
  }
})()
// -----------------------------------------------------------------------
// "eslint:recommended",
// "plugin:@typescript-eslint/recommended",

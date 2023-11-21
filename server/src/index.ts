// Import External modules
import * as dotenv from "dotenv"
import express, { json } from "express"
import cors from "cors"
import helmet from "helmet"
import { errorHandlerMiddleware } from "./middleware/error-handler"
import { urlNotFound } from "./middleware/urlNotFound"
import sample from "./routes/sample"
import { connectDB } from "./config/connectDb"

dotenv.config({ path: "./.env.local" })

const app = express()

app.use(helmet())
app.use(
  cors({
    origin: "*", // Add the allowed points only, never allow from everywhere
    // origin: ['http://localhost:3000/'],
  })
)
app.use(json())

// --------------------- End Points -------------------------
app.use("/sample", sample)
// ----------------------------------------------------------

// ------------------------- Middleware Functions -------------------------
app.use(errorHandlerMiddleware)
app.use(urlNotFound)
// -----------------------------------------------------------------------

// ------------------------- Starting The Server -------------------------
const PORT: number = Number(process.env.PORT) || 5001
;(() => {
  try {
    app.listen(PORT, () => {
      console.log(`Listening on port ${PORT}`)
    })
    connectDB()
  } catch (error) {
    console.log(error)
    console.log("POSSIBLE FIXES:")
    console.log("Recheck The MONGO_URI used")
    console.log("Check whether your environment variables are set")
    console.log("Check if the PORT you are using is free")
  }
})()
// -----------------------------------------------------------------------

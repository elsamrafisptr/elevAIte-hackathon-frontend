import dotenv from 'dotenv'
import { z } from 'zod'

dotenv.config()

const EnvSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url(),
  VERCEL_URL: z.string().url().optional(),
  VERCEL_PROJECT_PRODUCTION_URL: z.string().url().optional(),
  AUTH_SECRET: z.string().min(32, 'AUTH_SECRET must be at least 32 characters'),
  BLOB_READ_WRITE_TOKEN: z.string().nonempty()
})

type Env = z.infer<typeof EnvSchema>

const parsedEnv: Env = EnvSchema.parse(process.env)

export class Config {
  public static readonly APP_URL: string = parsedEnv.NEXT_PUBLIC_APP_URL

  public static readonly VERCEL_URL?: string = parsedEnv.VERCEL_URL

  public static readonly VERCEL_PROD_URL?: string =
    parsedEnv.VERCEL_PROJECT_PRODUCTION_URL

  public static readonly AUTH_SECRET: string = parsedEnv.AUTH_SECRET

  public static readonly BLOB_TOKEN: string = parsedEnv.BLOB_READ_WRITE_TOKEN

  private constructor() {}
}

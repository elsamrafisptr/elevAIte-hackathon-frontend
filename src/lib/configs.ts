import dotenv from 'dotenv'

dotenv.config({ path: '.env' })

export class Config {
  private constructor() {}

  public static readonly APP_URL: string | undefined = process.env.NEXT_PUBLIC_APP_URL
}

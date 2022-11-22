import '@tsed/ajv'
import '@tsed/platform-koa' // /!\ keep this import
import { PlatformApplication } from '@tsed/common'
import { Configuration, Inject } from '@tsed/di'
import * as controllers from '@controllers'

import { config } from './config'

@Configuration({
  ...config,
  acceptMimes: ['application/json'],
  // CHANGE
  componentsScan: false,
  httpPort: process.env.PORT ?? 3000,
  httpsPort: false,
  mount: {
    '/': [...Object.values(controllers)],
  },
})
export class Server {
  @Inject()
  // @ts-expect-error
  protected app: PlatformApplication

  @Configuration()
  // @ts-expect-error
  protected settings: Configuration
}

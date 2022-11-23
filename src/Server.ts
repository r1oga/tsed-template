import '@tsed/ajv'
import '@tsed/platform-koa' // /!\ keep this import
import { PlatformApplication } from '@tsed/common'
import { Configuration, Inject } from '@tsed/di'
import * as controllers from '@controllers'

@Configuration({
  acceptMimes: ['application/json'],
  // CHANGE
  componentsScan: false,
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

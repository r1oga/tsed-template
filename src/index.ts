import { $log } from '@tsed/common'
import { PlatformKoa } from '@tsed/platform-koa'

import { Server } from './Server'

async function bootstrap() {
  try {
    const platform = await PlatformKoa.bootstrap(Server)
    await platform.listen()

    process.on('SIGINT', () => {
      void platform.stop()
    })
  } catch (error) {
    $log.error({
      event: 'SERVER_BOOTSTRAP_ERROR',
      message: error.message,
      stack: error.stack,
    })
  }
}

bootstrap().catch(() => {
  /* emtpy */
})

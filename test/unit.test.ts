import { PlatformTest } from '@tsed/common'
import SuperTest from 'supertest'

import { Server } from 'src/Server'

describe('HelloWorld Controller', () => {
  let request: SuperTest.SuperTest<SuperTest.Test>

  beforeAll(PlatformTest.bootstrap(Server))
  beforeAll(() => {
    request = SuperTest(PlatformTest.callback())
  })
  afterAll(PlatformTest.reset)
  describe('GET /', () => {
    it('returns hello', async () => {
      const { text } = await request
        .get('/hello-world')
        .expect('Content-Type', /text/)
        .expect(200)

      expect(text).toEqual('hello')
    })
  })
})

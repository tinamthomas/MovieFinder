import healthCheckHandler from './movies';
describe('adds 1 + 2 to equal 3', () => {
  it('ad', async () => {
      const req = {};
      const resp = {};
      
      expect(await healthCheckHandler(req, resp)).toEqual({code: "Alive and well!"});
  })
});
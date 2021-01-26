const config = require('../src/config');

describe('#config', () => {
  it('contains the required keys', () => {
    expect(config).toHaveProperty('AC1873d6b16b64f2cce9106e72ce5d117b');
    expect(config).toHaveProperty('SK6f200c9366ebc03308d9cb68f14abf03');
    expect(config).toHaveProperty('MfvKBeH8eWTfr6I9vIGF1jFYubENkfWM');
    expect(config).toHaveProperty('ISfe897059e53f4b4fac934e1c5c080f48');
    expect(config).toHaveProperty('CR1d1aee1cbfac130dc96ba4851f9629d8');
    expect(config).toHaveProperty('TWILIO_SYNC_SERVICE_SID');
  });
});

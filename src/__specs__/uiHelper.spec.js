import { getApiBaseUrl } from '../uiHelper';

describe('Testing uiHelper functions', () => {
    describe('getApiBaseUrl', () => {
        it.skip('should return localhost url when node env is development', () => {
            const apiBaseUrl = getApiBaseUrl();

            expect(apiBaseUrl).toBe('http://localhost:5001');
        });

        it('should return /api url when node env is not development', () => {
            const apiBaseUrl = getApiBaseUrl();

            expect(apiBaseUrl).toBe('/api/');
        });
    });
    describe('isValidEmail', () => {});
});

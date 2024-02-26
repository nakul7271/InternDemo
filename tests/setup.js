
import { afterEach, beforeAll } from 'vitest'
import { cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/vitest'

// runs a clean after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
})

// import { server } from '../src/mockServices/server';
// beforeAll(() => server.listen());
// afterEach(() => server.resetHandlers());
// afterAll(() => server.close());


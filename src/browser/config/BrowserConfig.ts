export interface BrowserViewport {
  width: number;
  height: number;
}

export interface BrowserConfig {
  /** Which browser engine to use */
  browserType: 'chromium' | 'firefox' | 'webkit';
  /** Run browser in headless mode */
  headless?: boolean;
  /** Path to browser executable if not bundled */
  executablePath?: string;
  /** Additional launch arguments */
  args?: string[];
  /** Default page viewport size */
  viewport?: BrowserViewport;
}

export const DEFAULT_BROWSER_CONFIG: BrowserConfig = {
  browserType: 'chromium',
  headless: true,
  args: [],
  viewport: { width: 1280, height: 720 },
};

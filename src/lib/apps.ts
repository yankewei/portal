export type PersonalApp = {
  slug: string;
  name: string;
  platform: string;
  category: string;
  description: string;
  detail: string;
  icon: string;
  href: string;
  downloadUrl: string;
  requirements: string;
  features: string[];
  providers: string[];
};

export const keyDock: PersonalApp = {
  slug: 'key-dock',
  name: 'Key Dock',
  platform: 'macOS',
  category: 'Developer Utility',
  description: '把 API 密钥留在系统钥匙串里，而不是散落在配置文件和聊天记录中。',
  detail:
    'Key Dock 是一款面向开发者的 macOS 凭证管理工具。它使用 Keychain 保存密钥，支持身份验证、自动锁定、凭证状态检查和 iCloud 同步。',
  icon: '/image/apps/key-dock.png',
  href: '/apps/key-dock',
  downloadUrl: 'https://github.com/yankewei/keydock-release/releases/latest',
  requirements: 'macOS 14.0 Sonoma 或更高版本',
  features: [
    '使用 macOS Keychain 或 iCloud Keychain 存储密钥',
    '通过 Touch ID 或系统密码解锁敏感信息',
    '按提供商管理凭证，并主动检查密钥状态',
    '使用可配置的自动锁定时间减少凭证暴露',
  ],
  providers: [
    'OpenAI',
    'Anthropic',
    'Google Gemini',
    'DeepSeek',
    'Kimi Code',
    'Moonshot',
    'OpenRouter',
    'Vercel AI Gateway',
    'Custom Gateway',
  ],
};

export const apps: PersonalApp[] = [keyDock];

import type { UserType } from '@/app/(auth)/auth';
import type { ChatModel } from './models';

interface Entitlements {
  maxMessagesPerDay: number;
  availableChatModelIds: Array<ChatModel['id']>;
}

export const entitlementsByUserType: Record<UserType, Entitlements> = {
  /*
   * For users without an account
   */
  guest: {
    maxMessagesPerDay: 20,
    availableChatModelIds: ['chat-model', 'chat-model-reasoning', 'gpt-4.1'],
  },

  /*
   * For users with an account
   */
  regular: {
    maxMessagesPerDay: 10000,
    availableChatModelIds: ['chat-model', 'chat-model-reasoning', 'gpt-4.1'],
  },

  /*
   * TODO: For users with an account and a paid membership
   */
};
